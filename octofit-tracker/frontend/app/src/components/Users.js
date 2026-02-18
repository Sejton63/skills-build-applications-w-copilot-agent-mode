import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
  const url = `https://${endpoint}`;

  useEffect(() => {
    console.log('Fetching Users from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched Users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [url]);

  return (
    <div className="card shadow-sm p-4">
      <h2 className="card-title mb-4">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <th scope="row">{user.id || idx + 1}</th>
                <td>{user.username || '-'}</td>
                <td>{user.name || user.full_name || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default Users;
