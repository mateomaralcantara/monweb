from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from status import router as status_router

app = FastAPI(title="MonWeb API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en prod, restringe a tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(status_router)

@app.get("/")
def health():
    return {"ok": True}
