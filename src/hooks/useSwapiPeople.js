import React, { useEffect, useState } from "react";
import axios from "axios";

function useSwapiPeople(page) {
  const SWAPI_BASE_URL = import.meta.env.VITE_SWAPI_BASE_URL;
  // State for API data, loading, and error
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        // Fetch people data for given page
        const res = await axios.get(`${SWAPI_BASE_URL}/people/`, {
          params: { page },
        });
        setData(res.data);
      } catch (err) {
        console.error(err.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, SWAPI_BASE_URL]);

  // Return data and loading/error states
  return { data, loading, error };
}

export default useSwapiPeople;
