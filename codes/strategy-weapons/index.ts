import { Hitman, Knight, Pirate } from './characters';
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
