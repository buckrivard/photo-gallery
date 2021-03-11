import { useEffect, useState } from "react";
import { getRemoteData } from "../lib/getRemoteData";
import { Loading, FetchError } from '../types';

type FetchResult<T> = [Loading, FetchError, T | undefined];

function useFetch<T> (url: string): FetchResult<T> {
  const [result, setResult] = useState();
  const loading = !result;
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    getRemoteData(url, setResult, setError);
  }, [url]);

  return [loading, error, result];
};

export default useFetch;
