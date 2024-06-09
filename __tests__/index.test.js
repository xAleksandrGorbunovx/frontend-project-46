import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';
// import path from 'node:path';

test('check json plain', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
});

test('check yaml plain', () => {
  expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(result);
});

test('check yml plain', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(result);
});

// const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

// test('genDiff json test', () => {
//   const path1 = getFixturePath('file1.json');
//   const path2 = getFixturePath('file2.json');
//   const gendiffResult = genDiff(path1, path2);
//   expect(gendiffResult).toEqual(expectedResult);
// });
