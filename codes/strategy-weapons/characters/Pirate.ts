import { CharacterBehavior } from '../behaviors/CharacterBehavior';
import { ShotGun } from '../weapons/ShotGun';

export class Pirate implements CharacterBehavior {
  name: string;
  weapon = new ShotGun();

  constructor(name: string) {
    this.name = name;
  }
}
