import { useEffect, useState } from "react";
import { getRemoteData } from "../lib/getRemoteData";
import { Loading, FetchError } from '../types';

type FetchResult<T> = [Loading, FetchError, T | undefined];

// custom implementation of basic fetching libs. Basically just to show I know how -- I don't usually reinvent such wheels.
function useFetch<T> (url: string): FetchResult<T> {
  const [result, setResult] = useState();
  const loading = !result;
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    // IIFE to use async/await in useEffect
    (async () => {
      try {
        const result = await getRemoteData(url);

        setResult(result);
      } catch (e) {
        setError({
          original: e,
          message: e.message,
        });
      }
    })();
    // declaratively trigger useEffect -- don't depend on exhaustive deps when not needed
  }, [url]);

  return [loading, error, result];
};

export default useFetch;
