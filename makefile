DOCKER = docker run -it --rm -v $(CURDIR):/src -w /src node:6.9
npm:
	$(DOCKER) npm --prefix frontend/ ${ARGS}
webpack:
	$(DOCKER) ./frontend/node_modules/.bin/webpack --hide-modules --config ./frontend/webpack.config.js
