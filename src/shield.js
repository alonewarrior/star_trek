class Shield {
  constructor(energyLevel = 9001) {
    this.isUp = false;
    this.energyLevel = energyLevel;
    this.isDamaged = false;
    this.maxEnergyLevel = 10000;
  }

  hit(damage) {
    if (this.isUp) {
      this.transferEnergy(-damage);
      this.isUp = this.energyLevel !== 0;
    }
  }

  raise() {
    this.isUp = true;
  }

  transferEnergy(energyToTransfer) {
    this.energyLevel = Math.max(0, Math.min(this.energyLevel + energyToTransfer, this.maxEnergyLevel));
  }
}
