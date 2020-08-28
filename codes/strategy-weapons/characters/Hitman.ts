import { CharacterBehavior } from '../behaviors';
import { AK47 } from '../weapons';

export class Hitman implements CharacterBehavior {
  name: string;
  weapon = new AK47();

  constructor(name: string) {
    this.name = name;
  }
}
