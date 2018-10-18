class Ship {
    constructor() {
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
    
    damageRandomSubSystem() {
    
    }
}