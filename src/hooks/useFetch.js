import { useState, useEffect } from 'react';

const useFetch = (url,count) => {
    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(url);
        
        if (!response.ok) {

          throw new Error('Failed to fetch data');
        
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);

      } 
      catch (error) {

        setError(error.message);
        setLoading(false);

      }
    };

    fetchData();
  }, [url,count]);

  return { data, loading, error };
};

export default useFetch;