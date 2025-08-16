from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime, timezone
import os
import logging
from motor.motor_asyncio import AsyncIOMotorClient

logger = logging.getLogger("status")
if not logger.handlers:
    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME   = os.getenv("DB_NAME", "test_database")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]
col = db["status_checks"]

router = APIRouter(prefix="/api/status", tags=["Status"])

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

def now_iso():
    return datetime.now(timezone.utc).isoformat()

@router.post("/", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    doc = {
        "client_name": input.client_name.strip(),
        "email": input.email,
        "phone": input.phone.strip(),
        "service": input.service.strip(),
        "message": input.message.strip(),
        "timestamp": now_iso(),
    }
    try:
        res = await col.insert_one(doc)
        doc["id"] = str(res.inserted_id)
        return StatusCheck(**doc)
    except Exception as e:
        logger.exception("Mongo insert error")
        raise HTTPException(status_code=500, detail=f"Mongo error: {e}")

@router.get("/", response_model=List[StatusCheck])
async def get_status_checks(
    q: Optional[str] = Query(None, description="Filtro por client_name contiene"),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
):
    try:
        query = {}
        if q:
            query["client_name"] = {"$regex": q, "$options": "i"}
        cursor = col.find(query).sort("timestamp", -1).skip(offset).limit(limit)
        items = []
        async for r in cursor:
            r["id"] = str(r["_id"])
            items.append(StatusCheck(**r))
        return items
    except Exception as e:
        logger.exception("Mongo find error")
        raise HTTPException(status_code=500, detail=f"Mongo error: {e}")
