TAG_NAME ?= latest

push-image:
	docker push undercontrol-next:${TAG_NAME}

build-image:
	docker build -f docker/production/Dockerfile -t undercontrol-next:${TAG_NAME} .

start-docker:
	docker run --rm \
	--name undercontrol-next \
	-p 3000:3000 \
	-d \
	undercontrol-next:${TAG_NAME}

# Frontend use local, Backend use local, DB depends on BE application.yml
.PHONY: start-dev
start-dev: reverse-proxy-home
	yarn run dev

# FE use local, BE && BD use tencent-server
.PHONY: start-frontend-with-server-backend
start-frontend-with-server-backend: reverse-proxy-oatnil
	yarn run dev

.PHONY: reverse-proxy-home-debian
reverse-proxy-home-debian:
	docker-compose -f ./reverse_proxy/home-debian/docker-compose.yml up -d 

# Use local backend service
.PHONY: reverse-proxy-home
reverse-proxy-home:
	docker-compose -f ./reverse_proxy/home/docker-compose.yml up -d 

.PHONY: reverse-proxy-oatnil
reverse-proxy-oatnil:
	docker-compose -f ./reverse_proxy/oatnil.top/docker-compose.yml up -d 

.PHONY: reverse-proxy-restart
reverse-proxy-restart:
	docker-compose ./reverse_proxy/docker-compose.yml rm -fvs && docker-compose ./reverse_proxy/docker-compose.yml up -d && docker-compose ./reverse_proxy/docker-compose.yml logs -f 

generate-api-from-local:
	./openapi-typescript-codegen/generate.sh "openapi-typescript-codegen/api" "local"
