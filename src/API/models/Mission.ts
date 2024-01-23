import { UpdateMissionRequest, MissionStatus } from './types';

export default class Mission {
  id: number;

  name: string;

  vessel_id: number;

  date: string;

  status: MissionStatus;

  navigation_plan_id: number;

  constructor(missionReq: UpdateMissionRequest) {
    this.id = missionReq.id;
    this.name = missionReq.name;
    this.vessel_id = missionReq.vessel_id;
    this.date = missionReq.date;
    this.status = missionReq.status;
    this.navigation_plan_id = missionReq.navigation_plan_id;
  }
}
