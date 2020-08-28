import { WeaponBehavior } from '../behaviors/WeaponBehavior';

export class ShotGun extends WeaponBehavior {
  constructor() {
    super('ShotGun', 100, 5);
  }
}
