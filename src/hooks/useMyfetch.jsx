import React, { useEffect, useState } from "react";

function useMyfetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("second");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setLoading(false);
      } else {
        const result = await response.json();
        setError(result.error);
        setLoading(false);
      }
    } catch (e) {
      console.log("error :>> ", e);
      setError(message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, loading, error };
}

export default useMyfetch;
