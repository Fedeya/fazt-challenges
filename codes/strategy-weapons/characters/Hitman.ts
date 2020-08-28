import { CharacterBehavior } from '../behaviors/CharacterBehavior';
import { AK47 } from '../weapons/AK47';

export class Hitman implements CharacterBehavior {
  name: string;
  weapon = new AK47();

  constructor(name: string) {
    this.name = name;
  }
}
