from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime, timezone
import uuid

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

def now_utc() -> datetime:
    return datetime.now(timezone.utc)

# --- “DB” en memoria (se borra al reiniciar) ---
MEM_DB: List[dict] = []

@router.post("/", response_model=StatusCheck)
def create_status_check(input: StatusCheckCreate):
    try:
        row = {
            "id": str(uuid.uuid4()),
            "client_name": input.client_name.strip(),
            "email": input.email,
            "phone": input.phone.strip(),
            "service": input.service.strip(),
            "message": input.message.strip(),
            "timestamp": now_utc(),
        }
        MEM_DB.append(row)
        return StatusCheck(**row)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")

@router.get("/", response_model=List[StatusCheck])
def get_status_checks(
    q: Optional[str] = Query(None, description="Filtro por nombre"),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
):
    data = MEM_DB[:]
    if q:
        ql = q.strip().lower()
        data = [r for r in data if ql in r["client_name"].lower()]
    data.sort(key=lambda r: r["timestamp"], reverse=True)
    page = data[offset: offset + limit]
    return [StatusCheck(**r) for r in page]
