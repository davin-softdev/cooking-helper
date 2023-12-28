import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '@/types/user';

interface IUseFetchUsers {
  url: string
}

const useFetchUsers = <T,>(props: IUseFetchUsers) => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    axios.get<T[]>(props.url)
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
