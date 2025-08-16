from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from status import router as status_router

app = FastAPI(title="MonSeo API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)

app.include_router(status_router)

@app.get("/")
def health():
    return {"ok": True}
