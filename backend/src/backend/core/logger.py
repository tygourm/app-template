import logging
import logging.handlers
import sys
from pathlib import Path

from backend.core.settings import settings

Path(settings.logs_dirname).mkdir(parents=True, exist_ok=True)

formatter = logging.Formatter(settings.logs_format)

stream_handler = logging.StreamHandler(sys.stdout)
stream_handler.setLevel(settings.logs_level)
stream_handler.setFormatter(formatter)

file_handler = logging.handlers.RotatingFileHandler(
    Path.cwd() / settings.logs_dirname / settings.logs_filename,
    maxBytes=settings.logs_max_bytes,
    backupCount=settings.logs_backup_count,
)
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(formatter)

logging.basicConfig(level=logging.DEBUG, handlers=[stream_handler, file_handler])


def get_logger(name: str) -> logging.Logger:
    return logging.getLogger(name)
