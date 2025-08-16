from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Carga variables de entorno
load_dotenv()

# Seguridad: valida las variables necesarias
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ Faltan SUPABASE_URL o SUPABASE_KEY en tu .env")

# --- FastAPI App ---
app = FastAPI(
    title="MonSeo API",
    description="API para MonSeo Web y servicios de landing",
    version="1.0.0"
)

# --- Middleware CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ¡RESTRINGE esto en producción!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Rutas Modulares ---
from status import router as status_router
# Si luego tienes webprojects, sería igual:
# from webprojects import router as webprojects_router

app.include_router(status_router)
# app.include_router(webprojects_router)

# --- Healthcheck (opcional, para verificar si el server vive) ---
@app.get("/")
def read_root():
    return {"msg": "MonSeo API está corriendo 👋"}

