import path from 'node:path';
import resultStylish from '../__fixtures__/result.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.js';
import gendiff from '../src/index.js';

const testList = [
  'json',
  'yaml',
  'yml',
]

// Получение текущей директории и объединение ее с полным путем.
const getPath = (filepath) => path.resolve(process.cwd(), `__fixtures__/${filepath}`);

describe('gendiff', () => {
  test.each(testList)('gendiff %s', (format) => {
    const filepath1 = getPath(`file1.${format}`);
    const filepath2 = getPath(`file2.${format}`);

    expect(gendiff(filepath1, filepath2)).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'styLish')).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(resultPlain);
    expect(gendiff(filepath1, filepath2, 'json')).toEqual(resultJSON);
  });
});
