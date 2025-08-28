from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    host: str = "127.0.0.1"
    port: int = 8000
    reload: bool = False
    workers: int = 1

    app_debug: bool = False
    app_title: str = "App Template"
    app_version: str = "1.0.0"

    logs_format: str = "%(asctime)s %(levelname)s [%(name)s] %(message)s"
    logs_level: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = "INFO"
    logs_dirname: str = "logs"
    logs_filename: str = "backend.log"
    logs_max_bytes: int = 10 * 1024 * 1024
    logs_backup_count: int = 10

    model_config = SettingsConfigDict()


settings = Settings()
