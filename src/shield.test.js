describe('shield', function() {
    let shield;
    beforeEach(() => {
        shield = new Shield();
    });
    it('should have a minimum of 0', function() {
        shield.transferEnergy(-9002);
        expect(shield.energyLevel).toBe(0);
    });
    
    it('should have a maximum of 10000', function() {
        shield.transferEnergy(1000);
        expect(shield.energyLevel).toBe(10000);
    });
    
    it('transfers energy to the shield', function() {
        shield.transferEnergy(500);
        expect(shield.energyLevel).toBe(9501);
    });
    
    it('should start with an energy level of 9001', function() {
        expect(shield.energyLevel).toBe(9001);
    });
    
    it('can be raised', function() {
        shield.raise();
        expect(shield.isUp).toBe(true);
    });
    
    it('starts out lowered', function() {
        expect(shield.isUp).toBe(false);
    });
    
});
