/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import Mission from '../../../../API/models/Mission';

export default function MissionComponent({ mission }: { mission: Mission }) {
  const { id, date, navigation_plan_id, name } = mission;
  return (
    <div className="mission-list-item">
      <div>
        <span>Name: {name}</span>
      </div>
      <div>
        <span>Mission Id: {id}</span>
      </div>
      <div>
        <span>Date: {date}</span>
      </div>
      <div>
        <span>Navigation Plan Id: {navigation_plan_id}</span>
      </div>
      <div>
        <span>Name: {name}</span>
      </div>
      <Link to={`/mission-details/:missionId`}>View Mission Details</Link>
    </div>
  );
}
