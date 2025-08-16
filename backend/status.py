# status.py
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime, timezone
import os
import logging
from supabase import create_client, Client
from dotenv import load_dotenv

# --- Carga .env y cliente Supabase (una sola vez) ---
load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ Faltan SUPABASE_URL o SUPABASE_KEY en tu .env")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# --- Logger ---
logger = logging.getLogger("status")
if not logger.handlers:
    logging.basicConfig(level=logging.INFO)

router = APIRouter(prefix="/api/status", tags=["Status"])

# --- Modelos ---
class StatusCheck(BaseModel):
    id: str
    client_name: str
    email: EmailStr
    phone: str
    service: str
    message: str
    timestamp: datetime

class StatusCheckCreate(BaseModel):
    client_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field("", max_length=40)
    service: str = Field(..., min_length=2, max_length=120)
    message: str = Field(..., min_length=2, max_length=3000)

# --- Helpers ---
def _utc_now_iso() -> str:
    """ISO 8601 con zona +00:00 (compatible con timestamptz)."""
    return datetime.now(timezone.utc).isoformat()

# --- Endpoints ---
@router.post("/", response_model=StatusCheck)
def create_status_check(input: StatusCheckCreate):
    # Normaliza/limpia campos simples
    payload = {
        "client_name": input.client_name.strip(),
        "email": input.email,
        "phone": input.phone.strip(),
        "service": input.service.strip(),
        "message": input.message.strip(),
        "timestamp": _utc_now_iso(),
    }

    try:
        res = supabase.table("status_checks").insert(payload).select("*").single().execute()
        if not res.data:
            logger.error("Respuesta vacía al insertar en Supabase: %s", res)
            raise HTTPException(status_code=500, detail="No se pudo guardar en Supabase.")
        logger.info("✅ Insertado status_check id=%s", res.data.get("id"))
        return StatusCheck(**res.data)
    except Exception as e:
        logger.exception("❌ Error al insertar en Supabase")
        # No exponer detalles internos en producción
        raise HTTPException(status_code=500, detail="Error guardando en Supabase.")

@router.get("/", response_model=List[StatusCheck])
def get_status_checks(
    q: Optional[str] = Query(None, description="Filtro por nombre de cliente (ilike)"),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
):
    try:
        query = supabase.table("status_checks").select("*")

        if q:
            # Filtro por nombre (insensible a mayúsculas) usando ilike
            query = query.ilike("client_name", f"%{q.strip()}%")

        # Orden + paginación
        query = query.order("timestamp", desc=True).range(offset, offset + limit - 1)

        res = query.execute()
        data = res.data or []
        return [StatusCheck(**row) for row in data]
    except Exception:
        logger.exception("❌ Error al leer de Supabase")
        raise HTTPException(status_code=500, detail="Error leyendo de Supabase.")
