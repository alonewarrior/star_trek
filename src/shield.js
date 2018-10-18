class Shield {
    constructor() {
        this.isUp = false;
        this.energyLevel = 9001;
        this.isDamaged = false;
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
        this.energyLevel = Math.max(0, Math.min(this.energyLevel + energyToTransfer, 10000));
    }
}
