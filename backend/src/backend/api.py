from pathlib import Path

import uvicorn
from fastapi import FastAPI
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.responses import FileResponse, HTMLResponse, RedirectResponse, Response
from fastapi.staticfiles import StaticFiles

from backend.core.logger import get_logger
from backend.core.settings import settings

logger = get_logger("api")
app = FastAPI(
    debug=settings.app_debug,
    title=settings.app_title,
    version=settings.app_version,
    docs_url=None,
    redoc_url=None,
)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", include_in_schema=False)
async def root() -> RedirectResponse:
    return RedirectResponse(url="/api-docs")


@app.get("/api-docs", include_in_schema=False)
async def api_docs() -> HTMLResponse:
    return get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=settings.app_title,
        swagger_js_url="static/docs/swagger.js",
        swagger_css_url="static/docs/swagger.css",
        swagger_favicon_url="static/favicon.svg",
    )


@app.get("/app-docs", include_in_schema=False)
async def app_docs_root() -> RedirectResponse:
    return RedirectResponse(url="/app-docs/index.html")


@app.get("/app-docs/{path:path}", include_in_schema=False)
async def app_docs(path: str | None) -> Response:
    file = Path.cwd() / "static" / "site" / path
    if not file.is_file():
        return RedirectResponse(url="/app-docs/index.html")
    return FileResponse(file)


@app.get("/favicon.ico", include_in_schema=False)
async def favicon() -> FileResponse:
    return FileResponse(Path.cwd() / "static" / "favicon.svg")


def main() -> None:
    logger.info("Starting API")
    uvicorn.run(
        "backend.api:app",
        host=settings.host,
        port=settings.port,
        reload=settings.reload,
        workers=settings.workers,
    )


if __name__ == "__main__":
    main()
