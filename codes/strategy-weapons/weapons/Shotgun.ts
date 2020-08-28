import { WeaponBehavior } from '../behaviors/WeaponBehavior';

export class Shotgun implements WeaponBehavior {
  equiped = false;
  maxAmmo = 100;
  ammo = this.maxAmmo;
  bulletsPerShoot = 5;

  equip() {
    this.equiped = true;
    console.log('shotgun equiped');
  }

  unequip() {
    this.equiped = false;
    console.log('shotgun unequiped');
  }

  attack() {
    if (!this.equiped) {
      console.log('the shotgun is not equipped');
      return;
    }

    if (this.ammo <= 0) {
      console.log(`the shotgun has no more bullets`);
      return;
    }

    this.ammo -= this.bulletsPerShoot;
  }
}
