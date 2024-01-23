import Mission from './Mission';
import NavigationPlan from './NavigationPlan';
import Vessel from './Vessel';

export default class EnrichedMission extends Mission {
  vessel: Vessel;

  navigation_plan: NavigationPlan;

  constructor(
    mission: Mission,
    vessel: Vessel,
    navigationPlan: NavigationPlan,
  ) {
    super(mission);
    this.vessel = vessel;
    this.navigation_plan = navigationPlan;
  }
}
