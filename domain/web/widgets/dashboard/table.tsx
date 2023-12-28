'use client'
// Assuming this is in your Table component file
import useFetchUsers from '@/hooks/user';
import Loading from '@/app/loading';

const Table = () => {
  const { data, loading, error } = useFetchUsers();

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
};

export default Table;
