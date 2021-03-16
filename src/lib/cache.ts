const cache = {};

export const getItemFromCache = (key) => {
  const item = cache[key] || '';

  if (item) {
    return item;
  } else {
    return null;
  }
};
export const setItemInCache = (key, item) => {

  cache[key] = item;

};