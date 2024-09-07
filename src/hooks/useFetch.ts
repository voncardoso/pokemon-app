import { useState, useEffect } from "react";

interface UseFetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useFetch = <T>(
  baseUrl: string,
  offset: number = 0,
  limit: number = 20
): UseFetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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

    fetchData();
  }, [baseUrl, offset, limit]);

  return { data, error, loading };
};

export default useFetch;
