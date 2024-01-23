import { useEffect, useState } from 'react';

import { fetchAllMissions } from '../../../../API/functions';
import MissionComponent from './MissionComponent';
import Mission from '../../../../API/models/Mission';
import { Link } from 'react-router-dom';

export default function ViewAllMissions() {
  const [allMissions, setAllMissions] = useState([]);
  useEffect(() => {
    const getMissions = () => {
      const fetchedMissions = fetchAllMissions();
      setAllMissions(fetchedMissions);
    };
    getMissions();
  }, []);
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <h1>All Missions</h1>
      </div>
      <div className="scrollable-container">
        {allMissions && allMissions.length ? (
          allMissions.map((mission: Mission) => (
            <div key={mission.id}>
              <MissionComponent mission={mission} />
            </div>
          ))
        ) : (
          <div>no missions</div>
        )}
      </div>
    </div>
  );
}
