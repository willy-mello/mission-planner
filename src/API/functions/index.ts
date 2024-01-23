import Mission from '../models/Mission';
import NavigationPlan from '../models/NavigationPlan';
import Vessel from '../models/Vessel';
import {
  CreateMissionRequest,
  CreateNavigationPlanRequest,
  CreateVesselRequest,
  UpdateMissionRequest,
  UpdateNavigationPlanRequest,
  UpdateVesselRequest,
} from '../models/types';

const INITIAL_VESSEL_ID = 1;
const INITIAL_MISSION_ID = 1;
const INITIAL_NAVIGATION_PLAN_ID = 1;

enum PRIMARY_KEY_NAMES {
  MISSION = 'mission_pk_iterator',
  VESSEL = 'vessel_pk_iterator',
  NAVIGATION_PLAN = 'navigationplan_pk_iterator',
}

enum REPOSITORY_NAMES {
  MISSION = 'mission_repository',
  VESSEL = 'vessel_repository',
  NAVIGATION_PLAN = 'navigationplan_repository',
}

function setMissionIdIterator(id: number) {
  const stringyNum = id.toString();
  localStorage.setItem(PRIMARY_KEY_NAMES.MISSION, stringyNum);
}

function getOrCreateMissionIdIterator() {
  const currentPrimaryKey = localStorage.getItem(PRIMARY_KEY_NAMES.MISSION);
  console.log({ currentPrimaryKey });
  if (currentPrimaryKey) {
    return Number(currentPrimaryKey);
  }
  setMissionIdIterator(INITIAL_MISSION_ID);
  return INITIAL_MISSION_ID;
}

function setVesselIdIterator(id: number) {
  const stringyNum = id.toString();
  localStorage.setItem(PRIMARY_KEY_NAMES.VESSEL, stringyNum);
}

function getOrCreateVesselIdIterator() {
  const currentPrimaryKey = localStorage.getItem(PRIMARY_KEY_NAMES.VESSEL);
  if (currentPrimaryKey) {
    return Number(currentPrimaryKey);
  }
  setVesselIdIterator(INITIAL_VESSEL_ID);
  return INITIAL_VESSEL_ID;
}
function setNavPlanIdIterator(id: number) {
  const stringyNum = id.toString();
  localStorage.setItem(PRIMARY_KEY_NAMES.NAVIGATION_PLAN, stringyNum);
}

function getOrCreateNavPlanIdIterator() {
  const currentPrimaryKey = localStorage.getItem(
    PRIMARY_KEY_NAMES.NAVIGATION_PLAN,
  );
  if (currentPrimaryKey) {
    return Number(currentPrimaryKey);
  }
  setNavPlanIdIterator(INITIAL_NAVIGATION_PLAN_ID);
  return INITIAL_NAVIGATION_PLAN_ID;
}

// Missions

function saveMissionToDB(mission: Mission) {
  const missionRepository = localStorage.getItem(REPOSITORY_NAMES.MISSION);
  if (missionRepository) {
    const currentRepoState = JSON.parse(missionRepository);
    const nextRepoState = JSON.stringify({
      ...currentRepoState,
      [mission.id]: mission,
    });
    localStorage.setItem(REPOSITORY_NAMES.MISSION, nextRepoState);
    return;
  }

  const newRepo = JSON.stringify({ [mission.id]: mission });
  localStorage.setItem(REPOSITORY_NAMES.MISSION, newRepo);
}

function createMission(missionReq: CreateMissionRequest) {
  const nextMissionId = getOrCreateMissionIdIterator() + 1;
  const missionArgs = {
    ...missionReq,
    id: nextMissionId,
  } as UpdateMissionRequest;
  const createdMission = new Mission(missionArgs);
  saveMissionToDB(createdMission);
  setMissionIdIterator(createdMission.id);
  return createdMission;
}

function fetchMissionById(id: number) {
  // no null safety here for simplicity
  const missionRepository =
    localStorage.getItem(REPOSITORY_NAMES.MISSION) || '{}';

  const JSMissionRepo = JSON.parse(missionRepository);
  const foundMission = JSMissionRepo[id];
  return foundMission;
}

function fetchAllMissions() {
  const missionRepository =
    localStorage.getItem(REPOSITORY_NAMES.MISSION) || '{}';

  const JSMissionRepo = JSON.parse(missionRepository);
  const allMissions = Object.values(JSMissionRepo);
  return allMissions;
}
// Vessels

function fetchVesselById(id: number) {
  // no null safety here for simplicity
  const vesselRepo = localStorage.getItem(REPOSITORY_NAMES.VESSEL) || '{}';

  const JSVesselRepo = JSON.parse(vesselRepo);
  const foundVessel = JSVesselRepo[id];
  return foundVessel;
}
function saveVesselToDB(vessel: Vessel) {
  const vesselRepository = localStorage.getItem(REPOSITORY_NAMES.VESSEL);
  if (vesselRepository) {
    const currentRepoState = JSON.parse(vesselRepository);
    const nextRepoState = JSON.stringify({
      ...currentRepoState,
      [vessel.id]: vessel,
    });
    localStorage.setItem(REPOSITORY_NAMES.VESSEL, nextRepoState);
    return;
  }

  const newRepo = JSON.stringify({ [vessel.id]: vessel });
  localStorage.setItem(REPOSITORY_NAMES.VESSEL, newRepo);
}
function createVessel(vesselReq: CreateVesselRequest) {
  const nextVesselId = getOrCreateVesselIdIterator() + 1;
  const vesselArgs = {
    ...vesselReq,
    id: nextVesselId,
  } as UpdateVesselRequest;
  const createdVessel = new Vessel(vesselArgs);
  saveVesselToDB(createdVessel);
  setVesselIdIterator(createdVessel.id);
  return createdVessel;
}

// NAV PLANS

function fetchNavPlanById(id: number) {
  // no null safety here for simplicity
  const repo = localStorage.getItem(REPOSITORY_NAMES.NAVIGATION_PLAN) || '{}';

  const JSrepo = JSON.parse(repo);
  const foundNavPlan = JSrepo[id];
  return foundNavPlan;
}
function saveNavPlanToDB(navPlan: NavigationPlan) {
  const repo = localStorage.getItem(REPOSITORY_NAMES.NAVIGATION_PLAN);
  if (repo) {
    const currentRepoState = JSON.parse(repo);
    const nextRepoState = JSON.stringify({
      ...currentRepoState,
      [navPlan.id]: navPlan,
    });
    localStorage.setItem(REPOSITORY_NAMES.NAVIGATION_PLAN, nextRepoState);
    return;
  }

  const newRepo = JSON.stringify({ [navPlan.id]: navPlan });
  localStorage.setItem(REPOSITORY_NAMES.NAVIGATION_PLAN, newRepo);
}
function createNavPlan(navplanReq: CreateNavigationPlanRequest) {
  const nextVesselId = getOrCreateNavPlanIdIterator() + 1;
  const navPlanArgs = {
    ...navplanReq,
    id: nextVesselId,
  } as UpdateNavigationPlanRequest;
  const createdNavPlan = new NavigationPlan(navPlanArgs);
  saveNavPlanToDB(createdNavPlan);
  setNavPlanIdIterator(createdNavPlan.id);
  return createdNavPlan;
}
export {
  createMission,
  saveMissionToDB,
  fetchMissionById,
  fetchAllMissions,
  fetchVesselById,
  createVessel,
  fetchNavPlanById,
  saveNavPlanToDB,
  createNavPlan,
};
