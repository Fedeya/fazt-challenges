import { CharacterBehavior } from '../behaviors';
import { Shotgun } from '../weapons';

export class Pirate implements CharacterBehavior {
  name: string;
  weapon = new Shotgun();

  constructor(name: string) {
    this.name = name;
  }
}
