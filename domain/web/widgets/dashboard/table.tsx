'use client'
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import axios from "axios"
import { IUser } from "@/types/user";

const Table = () => {
    const [data, setData] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
             .then((res) => {
                 setData(res.data);
                 setLoading(false);
             })
             .catch((err) => {
                 setError(err.message);
                 setLoading(false);
             });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <div>
                {data.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))}
            </div>
        </div>
    );
}

export default Table
