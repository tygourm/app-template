from fastapi import FastAPI
from uvicorn import run

from server.core.lifespan import lifespan
from server.core.settings import settings

app = FastAPI(
    debug=settings.dev,
    title=settings.title,
    version=settings.version,
    lifespan=lifespan,
)


def main() -> None:
    run(
        "server.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.dev,
        workers=settings.workers,
        reload_dirs=["src/server"] if settings.dev else None,
    )
