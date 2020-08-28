import { WeaponBehavior } from '../behaviors/WeaponBehavior';

export class Sword implements WeaponBehavior {
  equiped = false;
  durabilty = 100;

  equip() {
    this.equiped = true;
    console.log('sword equiped');
  }

  unequip() {
    this.equiped = false;
    console.log('sword unequiped');
  }

  attack() {
    if (this.durabilty <= 0) {
      console.log('the sword is broken');
      return;
    }

    this.durabilty -= 5;
    console.log('sword attack success');
  }
}
