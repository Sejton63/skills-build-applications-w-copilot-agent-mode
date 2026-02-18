import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
  const url = `https://${endpoint}`;

  useEffect(() => {
    console.log('Fetching Workouts from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched Workouts:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [url]);

  return (
    <div className="card shadow-sm p-4">
      <h2 className="card-title mb-4">Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <th scope="row">{workout.id || idx + 1}</th>
                <td>{workout.name || '-'}</td>
                <td>{workout.type || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default Workouts;
