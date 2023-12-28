import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '@/types/user';

const useFetchUsers = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
         .then((res) => {
             setData(res.data);
             setLoading(false);
         })
         .catch((err) => {
             setError(err.message);
             setLoading(false);
         });
  }, []);

  return { data, loading, error };
};

export default useFetchUsers;
