import { useState, useEffect, useCallback } from 'react';

export const useFetch = (baseUrl, initialType) => {
  const [data, setData] = useState(null);

  const fetchUrl = useCallback(
    (type) => {
      fetch(baseUrl + '/' + type)
        .then((res) => res.json())
        .then((res) => setData(res));
    },
    [baseUrl]
  );

  useEffect(() => {
    fetchUrl(initialType);
  }, [fetchUrl, initialType]);

  return { data, fetchUrl };
};
