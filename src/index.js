import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

//Получение текущей директории и объединение ее с полным путем.
const getPath = (filepath) => path.resolve(process.cwd(), filepath);

// Функция для чтения файла
const readfile = (filepath) => readFileSync(getPath(filepath));

//Функция парсер для парсинга строки в JSON
const parser = (path) => JSON.parse(path);

const gendiff = (filepath1, filepath2) => {
    const file1 = readfile(filepath1);
    const file2 = readfile(filepath2);

    //Передаем полученный путь в функцию для парсинга и получаем данные в виде объекта
    const data1 =parser(file1);
    const data2 =parser(file2);
    console.log(data1);
    console.log(data2);

    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
    console.log(keys);

    const result = ['{'];
    for (let key of keys) {
        if (!Object.hasOwn(data2, key)) {
            result.push(`  - ${key}: ${data1[key]}`)
        } else if (!Object.hasOwn(data1, key)) {
            result.push(`  + ${key}: ${data2[key]}`)
        } else {
            if (data1[key] === data2[key]) {
                result.push(`    ${key}: ${data2[key]}`)
            } else {
                result.push(`  - ${key}: ${data1[key]}`)
                result.push(`  + ${key}: ${data1[key]}`)
            }
        }
    }
    result.push('}')
    return result.join('\n')
};
export default gendiff;
