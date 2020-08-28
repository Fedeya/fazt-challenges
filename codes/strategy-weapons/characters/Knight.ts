import { CharacterBehavior } from '../behaviors/CharacterBehavior';
import { Sword } from '../weapons/Sword';

export class Knight implements CharacterBehavior {
  name: string;
  weapon = new Sword();

  constructor(name: string) {
    this.name = name;
  }
}
