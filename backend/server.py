from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from status import router as status_router  # status.py está en la misma carpeta

app = FastAPI(title="MonSeo API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restringe en prod si quieres
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(status_router)

@app.get("/")
def health():
    return {"ok": True}
