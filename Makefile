install:
	npm ci
gendiff:
	node bin/gendiff.js -h
publish:
	npm publish --dry-run
test:
	npm test
test-coverge:
// Здесь нужно прописать команду для тест ковередже.

lint:
	npx eslint .
lint:
	npx eslint . --fix
