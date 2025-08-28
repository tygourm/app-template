from typer import Typer

from backend.core.logger import get_logger

logger = get_logger("cli")
app = Typer()


def main() -> None:
    logger.info("Starting CLI")
    app()


if __name__ == "__main__":
    main()
