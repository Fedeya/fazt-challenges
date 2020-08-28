import { CharacterBehavior } from '../behaviors/CharacterBehavior';
import { Shotgun } from '../weapons/Shotgun';

export class Pirate implements CharacterBehavior {
  name: string;
  weapon = new Shotgun();

  constructor(name: string) {
    this.name = name;
  }
}
