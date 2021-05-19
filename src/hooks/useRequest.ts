import { useEffect, useState } from 'react';
import axios from '../axios/axios-default';

const useRequest = (url: string) => {
  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        const keys = Object.keys(response.data);
        const resData = keys.map((key) => response.data[key]);
        setData(resData[0]);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
};

export default useRequest;
