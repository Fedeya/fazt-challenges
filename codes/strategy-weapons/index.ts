import { Hitman } from './characters/Hitman';
import { Pirate } from './characters/Pirate';
import { Knight } from './characters/Knight';
import { CharacterBehavior } from './behaviors/CharacterBehavior';

function realizeActions(...characters: CharacterBehavior[]) {
  characters.forEach(character => {
    character.weapon.attack();
    character.weapon.attack();
    character.weapon.equip();
    character.weapon.attack();
    character.weapon.attack();

    console.log(character);
  });
}

const fede = new Hitman('Fede');
const reiva = new Pirate('Reiva');
const nova = new Knight('Nova');

realizeActions(fede, reiva, nova);
