import { getItemFromCache, setItemInCache } from "./cache";

export const getRemoteData = async (url: string) => {
  const cached = getItemFromCache(url);

  // set result from cache
  if (cached) {
    return cached;
  }

  const res = await fetch(url);
  const json = await res.json();

  setItemInCache(url, json);

  return json;
}