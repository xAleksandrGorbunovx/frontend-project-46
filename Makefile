install:
	npm ci

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

run:
	node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml 

test:
	npm test

test-coverage:
	npx jest --coverage

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
