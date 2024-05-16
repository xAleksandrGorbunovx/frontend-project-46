install:
	npm ci
gendiff:
	node bin/gendiff.js -h
publish:
	npm publish --dry-run
test:
	npm test
lint:
	npx eslint .
