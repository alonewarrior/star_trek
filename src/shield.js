class Shield {
    constructor() {
        this.isUp = false;
        this.energyLevel = 9001;
    }

    raise() {
        this.isUp = true;
    }
    
    transferEnergy(energyToTransfer) {
        this.energyLevel = Math.max(0, Math.min(this.energyLevel + energyToTransfer, 10000));
    }
}
