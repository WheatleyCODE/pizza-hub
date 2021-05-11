import { useEffect, useState } from 'react';
import axios from '../axios/axios-default';

const useRequest = (url: string) => {
  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        let resData: any;
        // eslint-disable-next-line no-restricted-syntax
        for (const key in response.data) {
          if (Object.prototype.hasOwnProperty.call(response.data, key)) {
            resData = response.data[key];
          }
        }
        setData(resData);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
};

export default useRequest;
