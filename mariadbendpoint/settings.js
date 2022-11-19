import React, { useEffect, useState } from 'react';

export function useSettings(api: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://51.137.122.136:1337/' + api)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data)
  return data;
}
