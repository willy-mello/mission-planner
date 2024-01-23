// MIssions

enum MissionStatus {
  PLANNING = 'INPLANNING',
  ONGOING = 'ONGOING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

interface CreateMissionRequest {
  name: string;
  vessel_id: number;
  date: string;
  status: MissionStatus;
  navigation_plan_id: number;
}

interface UpdateMissionRequest {
  id: number;
  name: string;
  vessel_id: number;
  date: string;
  status: MissionStatus;
  navigation_plan_id: number;
}

// Vessels

enum VesselType {
  REMUS_100 = 'REMUS_100',
  REMUS_600 = 'REMUS_600',
  REMUS_3000 = 'REMUS_3000',
  REMUS_6000 = 'REMUS_6000',
  REMUS_TIV = 'REMUS_TIV',
  REMUS_SharkCam = 'REMUS_SharkCam',
  REMUS_TurtleCam = 'REMUS_TurtleCam',
}

interface CreateVesselRequest {
  vessel_type: VesselType;
  speed: number;
  max_depth: number;
}

interface UpdateVesselRequest {
  id: number;
  vessel_type: VesselType;
  speed: number;
  max_depth: number;
}

// Navigation
interface FakeLatLongPosition {
  x: number;
  y: number;
}

interface CreateNavigationPlanRequest {
  navigation_path: Array<FakeLatLongPosition>;
}

interface UpdateNavigationPlanRequest {
  id: number;
  navigation_path: Array<FakeLatLongPosition>;
}

export {
  CreateMissionRequest,
  UpdateMissionRequest,
  MissionStatus,
  VesselType,
  CreateVesselRequest,
  UpdateVesselRequest,
  FakeLatLongPosition,
  CreateNavigationPlanRequest,
  UpdateNavigationPlanRequest,
};
