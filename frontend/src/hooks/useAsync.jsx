// A cleaner way to fetch data from APIs
// Custom hook

import { useState, useCallback, useRef, useEffect } from "react";

const useAsync = ({
  asyncFunction,
  args = [],
  deps = [],
  immediate = true,
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFirstUpdate = useRef(true);

  const execute = useCallback(() => {
    setLoading(true);
    setError(null);
    setResponse(null);
    return asyncFunction(...args)
      .then((response) => {
        setResponse(response.json());
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [asyncFunction, args]);

  useEffect(() => {
    if (immediate) {
      execute();
    } else {
      if (!isFirstUpdate.current) {
        execute();
      }
    }
  }, [...deps]);

  useEffect(() => {
    isFirstUpdate.current = false;
  }, []);

  return { execute, error, loading, response };
};

export { useAsync };
