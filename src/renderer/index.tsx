import { createRoot } from 'react-dom/client';
import App from './App';
import { MissionStatus, VesselType } from '../API/models/types';
import { createMission, createNavPlan, createVessel } from '../API/functions';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

console.log('seeding DB');

const sampleVehicles = [
  { vessel_type: VesselType.REMUS_100, speed: 3, max_depth: 30 },
  { vessel_type: VesselType.REMUS_600, speed: 5, max_depth: 600 },
  { vessel_type: VesselType.REMUS_3000, speed: 7, max_depth: 4500 },
  { vessel_type: VesselType.REMUS_6000, speed: 4, max_depth: 80000 },
];

sampleVehicles.forEach((ves) => createVessel(ves));
console.log('vessels seeded');

const navPathA = [
  { x: 0, y: 0 },
  { x: 1, y: -10 },
  { x: 2, y: -10 },
  { x: 3, y: -20 },
  { x: 4, y: -25 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 7, y: -10 },
  { x: 8, y: -10 },
  { x: 9, y: -20 },
  { x: 10, y: -25 },
  { x: 11, y: 0 },
];
const navPathb = [
  { x: 0, y: 0 },
  { x: 1, y: -10 },
  { x: 2, y: -10 },
  { x: 3, y: -20 },
  { x: 4, y: -25 },
  { x: 5, y: -45 },
  { x: 6, y: -75 },
  { x: 7, y: -78 },
  { x: 8, y: -100 },
  { x: 9, y: -50 },
  { x: 10, y: 0 },
];

const sampleNavPlans = [
  { navigation_path: navPathA },
  { navigation_path: navPathb },
];

sampleNavPlans.forEach((plan) => createNavPlan(plan));
console.log('navPlans seeded');

const sampleMissions = [
  {
    vessel_id: 4,
    navigation_plan_id: 1,
    date: '01-23-2024',
    status: MissionStatus.ONGOING,
    name: 'Sample Mission One',
  },
  {
    vessel_id: 2,
    navigation_plan_id: 2,
    date: '01-25-2024',
    status: MissionStatus.PLANNING,
    name: 'Sample Mission Two',
  },
  {
    vessel_id: 1,
    navigation_plan_id: 1,
    date: '01-20-2024',
    status: MissionStatus.SUCCESS,
    name: 'Sample Mission Three',
  },
];

sampleMissions.forEach((mission) => createMission(mission));
