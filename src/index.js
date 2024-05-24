import { readFileSync } from 'node:fs';
import path from 'node:path';

//Получение текущей директории и объединение ее с полным путем.
const getPath = (filepath) => path.resolve(process.cwd(), filepath);

//Функция парсер для парсинга строки в JSON
const parser = (path) => JSON.parse(path);

const gendiff = (filepath1, filepath2) => {
    const file1 = readFileSync(getPath(filepath1));
    const file2 = readFileSync(getPath(filepath2));

    //Передаем полученный путь в функцию для парсинга и получаем данные в виде объекта
    const data1 =parser(file1);
    const data2 =parser(file2);
    console.log(data1);
    console.log(data2);
};

export default gendiff;
