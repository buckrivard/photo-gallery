export const getItemFromCache = (key) => {
  const item = localStorage.getItem(key) || '';

  try {
    const parsed = JSON.parse(item);

    return parsed;
  } catch {
    return null;
  }
};
export const setItemInCache = (key, item) => {
  const itemString = JSON.stringify(item);

  localStorage.setItem(key, itemString);
};