# backend/api/status.py
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime, timezone
import os
import logging

# --- Toggle Supabase por env ---
USE_SUPABASE = os.getenv("USE_SUPABASE", "1").lower() not in ("0", "false")

supabase = None
if USE_SUPABASE:
    from dotenv import load_dotenv
    from supabase import create_client, Client
    load_dotenv()
    SUPABASE_URL = os.getenv("SUPABASE_URL")
    SUPABASE_KEY = os.getenv("SUPABASE_KEY")
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise RuntimeError("❌ Faltan SUPABASE_URL o SUPABASE_KEY en tu .env")
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# --- Logger ---
logger = logging.getLogger("status")
if not logger.handlers:
    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

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

def _utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()

# --- Fallback en memoria cuando no hay Supabase ---
MEM_DB: List[dict] = []

@router.post("/", response_model=StatusCheck)
def create_status_check(input: StatusCheckCreate):
    payload = {
        "client_name": input.client_name.strip(),
        "email": input.email,
        "phone": input.phone.strip(),
        "service": input.service.strip(),
        "message": input.message.strip(),
        "timestamp": _utc_now_iso(),
    }

    if not USE_SUPABASE:
        # genera id local para mantener contrato
        local_id = f"local-{len(MEM_DB)+1}"
        row = {"id": local_id, **payload}
        MEM_DB.append(row)
        logger.info("🟡 [LOCAL] Insertado status_check id=%s", local_id)
        return StatusCheck(**row)

    try:
        # insert + select single devuelve el registro insertado
        res = (
            supabase.table("status_checks")
            .insert(payload)
            .select("*")
            .single()
            .execute()
        )
        if not res.data:
            logger.error("Respuesta vacía al insertar en Supabase: %s", res)
            raise HTTPException(status_code=500, detail="No se pudo guardar en Supabase.")
        logger.info("✅ Insertado status_check id=%s", res.data.get("id"))
        return StatusCheck(**res.data)
    except Exception:
        logger.exception("❌ Error guardando en Supabase")
        raise HTTPException(status_code=500, detail="Error guardando en Supabase.")

@router.get("/", response_model=List[StatusCheck])
def get_status_checks(
    q: Optional[str] = Query(None, description="Filtro por nombre (ilike)"),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
):
    if not USE_SUPABASE:
        data = MEM_DB[:]
        if q:
            ql = q.strip().lower()
            data = [r for r in data if ql in r["client_name"].lower()]
        data.sort(key=lambda r: r["timestamp"], reverse=True)
        page = data[offset : offset + limit]
        return [StatusCheck(**r) for r in page]

    try:
        query = supabase.table("status_checks").select("*")
        if q:
            query = query.ilike("client_name", f"%{q.strip()}%")
        res = query.order("timestamp", desc=True).range(offset, offset + limit - 1).execute()
        return [StatusCheck(**row) for row in (res.data or [])]
    except Exception:
        logger.exception("❌ Error leyendo de Supabase")
        raise HTTPException(status_code=500, detail="Error leyendo de Supabase.")
