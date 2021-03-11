import { getItemFromCache, setItemInCache } from "./cache";

export const getRemoteData = async (url: string, setResult, setError) => {
  const cached = getItemFromCache(url);

  // set result from cache
  if (cached) {
    setResult(cached)
    return;
  }

  try {
    const res = await fetch(url);
    const json = await res.json();
    
    setResult(json);
    setItemInCache(url, json);
  } catch (e) {
    setError({
      original: e,
      message: e.message,
    });
  }
}