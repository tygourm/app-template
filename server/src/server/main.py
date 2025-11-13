from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import run

from server.core.lifespan import lifespan
from server.core.settings import settings
from server.infra.api.api_router import router as api

app = FastAPI(
    debug=settings.dev,
    title=settings.title,
    version=settings.version,
    lifespan=lifespan,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
app.include_router(api, prefix="/api", tags=["api"])


def main() -> None:
    run(
        "server.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.dev,
        workers=settings.workers,
        reload_dirs=["src/server"] if settings.dev else None,
    )
