import { Hitman } from './characters/Hitman';
import { Pirate } from './characters/Pirate';

const fede = new Hitman('Fede');

fede.weapon.equip();
fede.weapon.shoot();
fede.weapon.shoot();
fede.weapon.equip();
fede.weapon.unequip();
fede.weapon.shoot();

console.log(fede);

const reiva = new Pirate('Reiva');

reiva.weapon.shoot();
reiva.weapon.equip();
reiva.weapon.shoot();
reiva.weapon.shoot();
console.log(reiva);
