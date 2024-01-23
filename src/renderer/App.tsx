import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import ViewAllMissions from './Pages/Missions/components/ViewAllMissions';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Electron React HII Missions Systems</h1>
      <div className="Hello">
        <Link to="/missions">View All Missions</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/missions" element={<ViewAllMissions />} />
      </Routes>
    </Router>
  );
}
