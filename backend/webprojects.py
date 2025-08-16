# server.py o routers/webprojects.py

from fastapi import FastAPI, APIRouter, HTTPException, Body
from dotenv import load_dotenv
from supabase import create_client, Client
import os
from datetime import datetime

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ Faltan SUPABASE_URL o SUPABASE_KEY en tu .env")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI()
api_router = APIRouter(prefix="/api")

@api_router.post("/webprojects")
def create_web_project(data: dict = Body(...)):
    print("📩 Recibido para webproject:", data)
    try:
        # Timestamp de seguridad si no viene
        if "timestamp" not in data:
            data["timestamp"] = datetime.utcnow().isoformat()
        res = supabase.table("web_projects").insert(data).execute()
        if not res.data:
            print("❌ ERROR: No data guardada")
            raise HTTPException(status_code=500, detail="No se pudo guardar el proyecto.")
        print("✅ Guardado en Supabase:", res.data[0])
        return {"success": True, "data": res.data[0]}
    except Exception as e:
        print("❌ ERROR Supabase:", str(e))
        raise HTTPException(status_code=500, detail=f"Error guardando en Supabase: {str(e)}")

app.include_router(api_router)
