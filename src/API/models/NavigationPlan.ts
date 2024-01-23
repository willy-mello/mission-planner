import { FakeLatLongPosition, UpdateNavigationPlanRequest } from './types';

export default class NavigationPlan {
  id: number;

  navigation_path: Array<FakeLatLongPosition>;

  constructor(navigationPlanReq: UpdateNavigationPlanRequest) {
    this.id = navigationPlanReq.id;
    this.navigation_path = navigationPlanReq.navigation_path;
  }
}
