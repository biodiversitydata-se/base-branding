deps:
	rm -rf node_modules
	npm install

run:
	npm run dev

run-docker: build-local
	docker build -t sbdi/static-dev .
	docker run --rm --detach --name sbdi-static-dev --publish 3333:80 sbdi/static-dev

build:
	npm run build

build-local:
	npm run build-local

release:
	../sbdi-install/utils/make-release.sh
