init:
	pnpm i --frozen-lockfile
	uv sync --all-packages --frozen

start: init
	trap "kill 0" EXIT; \
	cd client && pnpm start & \
	cd server && DEV=True LOGS_LEVEL=DEBUG uv run server & \
	wait

build: init
	pnpm -r build
	uv build --all-packages --wheel

serve: build
	trap "kill 0" EXIT; \
	cd client && pnpm serve & \
	cd server && uv run server & \
	wait

write: init
	pnpm prettier -w .
	uv run ruff format --no-cache

check: init
	pnpm prettier -c . && pnpm -r exec eslint --fix
	uv run ruff check --fix --no-cache && uv run mypy .

clean:
	rm -rf .venv/
	find . -type d -name dist -prune -exec rm -rf {} +
	find . -type d -name logs -prune -exec rm -rf {} +
	find . -type d -name __pycache__ -prune -exec rm -rf {} +
	find . -type d -name node_modules -prune -exec rm -rf {} +
