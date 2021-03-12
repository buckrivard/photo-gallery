import { useEffect, useState } from "react";
import { getRemoteData } from "../lib/getRemoteData";
import { Loading, FetchError } from '../types';

type FetchResult<T> = [Loading, FetchError, T | undefined];

function useFetch<T> (url: string): FetchResult<T> {
  const [result, setResult] = useState();
  const loading = !result;
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
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
  }, [url]);

  return [loading, error, result];
};

export default useFetch;
