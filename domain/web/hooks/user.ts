import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUsers = <T,>(url: string) => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    axios.get<T[]>(url)
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

const useFetchUser = <T,>(url: string) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    axios.get<T>(url)
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

export const UserServices = {
  useFetchUsers,
  useFetchUser
}
