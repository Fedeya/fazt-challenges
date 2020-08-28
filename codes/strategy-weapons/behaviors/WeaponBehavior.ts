export class WeaponBehavior {
  name: string;
  maxAmmo: number;
  ammoPerShoot: number;
  ammo: number;
  private equiped = false;

  constructor(name: string, maxAmmo: number, ammoPerShoot?: number) {
    this.maxAmmo = maxAmmo;
    this.name = name;
    this.ammoPerShoot = ammoPerShoot || 1;
    this.ammo = this.maxAmmo;
  }

  equip() {
    if (this.equiped) {
      console.log(`${this.name} is already equiped`);
      return;
    }
    console.log(`${this.name} is equiped`);
    this.equiped = true;
  }

  unequip() {
    if (!this.equiped) {
      console.log(`${this.name} is not equiped`);
      return;
    }
    console.log(`${this.name} is unequiped`);
    this.equiped = false;
  }

  recharge() {
    this.ammo = this.maxAmmo;
    console.log(`the ammo of ${this.name} is recharged`);
  }

  shoot() {
    if (!this.equiped) {
      console.log(`the ${this.name} is not equiped`);
      return;
    }

    this.ammo -= this.ammoPerShoot;
  }
}
