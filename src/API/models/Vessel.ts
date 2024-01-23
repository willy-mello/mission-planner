import { UpdateVesselRequest, VesselType } from './types';

export default class Vessel {
  id: number;

  vessel_type: VesselType;

  speed: number;

  max_depth: number;

  constructor(vesselReq: UpdateVesselRequest) {
    this.id = vesselReq.id;
    this.vessel_type = vesselReq.vessel_type;
    this.speed = vesselReq.speed;
    this.max_depth = vesselReq.max_depth;
  }
}
