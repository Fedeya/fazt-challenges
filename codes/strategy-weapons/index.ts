import { Hitman } from './characters/Hitman';
import { Pirate } from './characters/Pirate';

const fede = new Hitman('Fede');

fede.weapon.equip();
fede.weapon.attack();
fede.weapon.attack();
fede.weapon.equip();
fede.weapon.unequip();
fede.weapon.attack();

console.log(fede);

const reiva = new Pirate('Reiva');

reiva.weapon.attack();
reiva.weapon.equip();
reiva.weapon.attack();
reiva.weapon.attack();
console.log(reiva);
