import { getItemFromCache, setItemInCache } from "./cache";

// simple remote data getter
// allow errors to bubble straight up
// TODO introduce metrics logging to log errors
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