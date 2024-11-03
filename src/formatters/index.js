import makePlain from './plain.js';
import makeStylishDiff from './stylish.js';

// !!!возможно заменить на makeStylishDiff

const formatter = {
  stylish: makeStylishDiff,
  plain: makePlain,
  json: JSON.stringify,
};

export default (tree, format) => formatter[format](tree);
