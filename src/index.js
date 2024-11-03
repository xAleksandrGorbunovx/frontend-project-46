import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';
import parser from './parsers.js';
// import getDifferenceTree from './buildAST.js';
import formatter from './formatters/index.js';
import getDifferenceTree from './buildAST.js';

// Получение текущей директории и объединение ее с полным путем.
const getPath = (filepath) => path.resolve(process.cwd(), filepath);
// шаг 6 получаем расширение файла
const getExtension = (filename) => path.extname(filename).slice(1);
// Функция для чтения файла
const getData = (filepath) => parser(readFileSync(filepath, 'utf-8'), getExtension(filepath));

// добавили дефолтное значение stylish на тот случай когда пользователь не указывает значение формата
const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  // console.log(path1);
  // console.log(path2);

  // Передаем полученный путь в функцию для парсинга и получаем данные в виде объекта
  const data1 = getData(path1);
  const data2 = getData(path2);
  // console.log(data1);
  // console.log(data2);
  // console.log(format);

  // передаем в функцию данные и формат который пользователь выбрал.
  // console.log('getDifferenceTree-', getDifferenceTree(data1, data2));
  // console.log(formatter(getDifferenceTree(data1, data2), format));
  return formatter(getDifferenceTree(data1, data2), format);

  // Достаем ключи объектов, объединяем, сортируем убираем лишее
  // const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  // console.log(keys);

  // const result = keys.reduce((acc, key) => {
  //   if (!Object.hasOwn(data2, key)) {
  //     acc.push(`  - ${key}: ${data1[key]}`);
  //   } else if (!Object.hasOwn(data1, key)) {
  //     acc.push(`  + ${key}: ${data2[key]}`);
  //   } else if (data1[key] === data2[key]) {
  //     acc.push(`    ${key}: ${data2[key]}`);
  //   } else {
  //     acc.push(`  - ${key}: ${data1[key]}`);
  //     acc.push(`  + ${key}: ${data1[key]}`);
  //   }
  //   return acc;
  // }, ['{']);

  // return `${result.join('\n')}\n}`;
};


export default gendiff;
