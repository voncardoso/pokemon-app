import { useState, useEffect } from "react";

interface UseFetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void;
}

const useFetch = <T>(
  baseUrl: string,
  offset: number = 0,
  limit: number = 20,
  disesable?: false
): UseFetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `${baseUrl}?offset=${offset}&limit=${limit}/language/13`;
      const response = await fetch(url);

      // Verifica se a resposta é ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: T = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [baseUrl, offset, limit]);

  if (disesable) {
    return { data, error, loading, refetch: () => {} };
  }

  return { data, error, loading, refetch: fetchData };
};

export default useFetch;
