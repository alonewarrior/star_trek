class Ship {
  constructor() {
    this.energyReserve = 900001;
    this._subSystems = [new Shield()];
  }

  hasSubSystem(val) {
    if (val === 'shield') {
      return true;
    }
    return false;
  }

  getSubSystem(val) {
    return this._subSystems[0];
  }

  isSubSystemDamaged(val) {
    return false;
  }

  transferEnergyBetweenShield(energyToTransfer) {
    const shield = this.getSubSystem('shield');
    const freeSpace = shield.maxEnergyLevel - shield.energyLevel;

    energyToTransfer = freeSpace >= energyToTransfer ? energyToTransfer : freeSpace;

    this.energyReserve = Math.max(0, this.energyReserve - energyToTransfer);
    this.getSubSystem('shield').transferEnergy(energyToTransfer);
  }

  damageRandomSubSystem() {}
}
