import yaml from 'js-yaml';

// Функция парсер для парсинга строки в JSON, yaml, yaml
const parse = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (data, format) => parse[format](data);
