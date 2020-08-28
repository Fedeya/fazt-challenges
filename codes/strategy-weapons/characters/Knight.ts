import { CharacterBehavior } from '../behaviors';
import { Sword } from '../weapons';

export class Knight implements CharacterBehavior {
  name: string;
  weapon = new Sword();

  constructor(name: string) {
    this.name = name;
  }
}
