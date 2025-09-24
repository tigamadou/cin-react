# Makefile for CIN 2025 React Project

# Load environment variables from .env file
ifneq (,$(wildcard .env))
    include .env
    export
endif

# Default values (can be overridden by .env file)
SERVER_HOST ?= root@167.86.123.3
SERVER_DIST_PATH ?= /root/dist
SERVER_DEPLOY_SCRIPT ?= /root/deploy.sh
SERVER_WEB_PATH ?= /var/www/cin2025
BUILD_COMMAND ?= npm run build
DIST_FOLDER ?= dist
RSYNC_OPTIONS ?= -avz --delete
SSH_PORT ?= 22
SSH_KEY_PATH ?= ~/.ssh/id_rsa

# Default target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  build     - Build the project for production"
	@echo "  deploy    - Deploy the dist folder to server and run deploy script"
	@echo "  deploy-only - Deploy without building (useful if already built)"
	@echo "  clean     - Clean build artifacts"
	@echo "  setup-env - Copy env.example to .env for configuration"
	@echo "  help      - Show this help message"

# Build the project for production
.PHONY: build
build:
	@echo "Building project for production..."
	$(BUILD_COMMAND)
	@echo "✅ Build completed!"

# Deploy to server
.PHONY: deploy
deploy: build
	@echo "Starting deployment to server..."
	@echo "Uploading $(DIST_FOLDER) folder to $(SERVER_HOST)..."
	rsync $(RSYNC_OPTIONS) $(DIST_FOLDER)/ $(SERVER_HOST):$(SERVER_DIST_PATH)/
	@echo "Running deploy script on server..."
	ssh $(SERVER_HOST) "chmod +x $(SERVER_DEPLOY_SCRIPT) && $(SERVER_DEPLOY_SCRIPT)"
	@echo "✅ Deployment completed successfully!"

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf $(DIST_FOLDER)/
	@echo "✅ Clean completed!"

# Deploy without building (useful if you've already built)
.PHONY: deploy-only
deploy-only:
	@echo "Starting deployment to server (without building)..."
	@echo "Uploading $(DIST_FOLDER) folder to $(SERVER_HOST)..."
	rsync $(RSYNC_OPTIONS) $(DIST_FOLDER)/ $(SERVER_HOST):$(SERVER_DIST_PATH)/
	@echo "Running deploy script on server..."
	ssh $(SERVER_HOST) "chmod +x $(SERVER_DEPLOY_SCRIPT) && $(SERVER_DEPLOY_SCRIPT)"
	@echo "✅ Deployment completed successfully!"

# Setup environment file
.PHONY: setup-env
setup-env:
	@if [ ! -f .env ]; then \
		cp env.example .env; \
		echo "✅ Created .env file from env.example"; \
		echo "📝 Please edit .env with your server details"; \
	else \
		echo "⚠️  .env file already exists"; \
	fi
