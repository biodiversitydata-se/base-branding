run:
	brunch watch -s

run-docker: build
	docker build -t sbdi/static-dev .
	docker run --rm --detach --name sbdi-static-dev --publish 3333:80 sbdi/static-dev

build:
	brunch build --production

bump-deps:
	rm -r node_modules
	yarn --frozen-lockfile
