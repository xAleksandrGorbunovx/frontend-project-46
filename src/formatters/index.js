import makePlain from './plain.js';
import makeStylish from './stylish.js';

// !!!возможно заменить на makeStylishDiff

const formatter = {
  stylish: makeStylish,
  plain: makePlain,
  json: JSON.stringify,
};

export default (tree, format) => formatter[format](tree);
