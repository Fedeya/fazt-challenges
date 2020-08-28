import { WeaponBehavior } from './WeaponBehavior';

export interface CharacterBehavior {
  name: string;
  weapon: WeaponBehavior;
}
