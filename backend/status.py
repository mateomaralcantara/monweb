from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ Faltan SUPABASE_URL o SUPABASE_KEY en tu .env")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

router = APIRouter(prefix="/api/status", tags=["Status Checks"])

# ----- Modelos -----
class StatusCheck(BaseModel):
    id: str
    client_name: str
    email: EmailStr
    phone: str
    service: str
    message: str
    timestamp: datetime

class StatusCheckCreate(BaseModel):
    client_name: str
    email: EmailStr
    phone: str
    service: str
    message: str

# ----- Endpoints -----
@router.post("/", response_model=StatusCheck)
def create_status_check(input: StatusCheckCreate):
    data = input.dict()
    data["timestamp"] = datetime.utcnow().isoformat()
    try:
        res = supabase.table("status_checks").insert(data).execute()
        if not res.data:
            raise HTTPException(status_code=500, detail="No se pudo guardar en Supabase.")
        return StatusCheck(**res.data[0])
    except Exception as e:
        print("❌ ERROR SUPABASE:", str(e))
        raise HTTPException(status_code=500, detail="Error guardando en Supabase.")

@router.get("/", response_model=List[StatusCheck])
def get_status_checks():
    try:
        res = supabase.table("status_checks").select("*").order("timestamp", desc=True).execute()
        if not res.data:
            return []
        return [StatusCheck(**row) for row in res.data]
    except Exception as e:
        print("❌ ERROR SUPABASE:", str(e))
        raise HTTPException(status_code=500, detail="Error leyendo de Supabase.")
