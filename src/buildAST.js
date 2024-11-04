import _ from 'lodash';

const buildAST = (data1, data2) => {
  const data1Keys = _.keys(data1);
  const data2Keys = _.keys(data2);

  const sortedKeys = _.sortBy(_.union(data1Keys, data2Keys));

  // переделал на объект  в котором хранятся 
  //различные методы, обрабатывающие возможные варианты изменений:

  const children = sortedKeys.map((key) => {
    const handlers = {
      added: () => ({ type: 'added', key, value: data2[key] }),
      removed: () => ({ type: 'removed', key, value: data1[key] }),
      nested: () => ({ type: 'nested', key, children: buildAST(data1[key], data2[key]) }),
      unchanged: () => ({ type: 'unchanged', key, value: data1[key] }),
      changed: () => ({ type: 'changed', key, oldValue: data1[key], newValue: data2[key] }),
    };
  
    if (!_.has(data1, key)) return handlers.added();
    if (!_.has(data2, key)) return handlers.removed();
    
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) return handlers.nested();
    if (_.isEqual(data1[key], data2[key])) return handlers.unchanged();
    
    return handlers.changed();
  });
  
  return children;
};

const getDifferenceTree = (data1, data2) => ({
  type: 'root',
  children: buildAST(data1, data2),
});

export default getDifferenceTree;
