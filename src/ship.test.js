describe('ship', () => {
    let ship;
    beforeEach(() => {
        ship = new Ship();
    });
    xit('should damage a random subsystem', () => {
        ship.damageRandomSubSystem();
        expect(ship.isSubSystemDamaged('shield')).toBe(true);
    });
    
    it('should have a list of subsystems', () => {
        expect(ship.getSubSystem('shield')).toEqual(new Shield());
    });
    
    it('should have an undamaged shield subsystem', () => {
        expect(ship.isSubSystemDamaged('shield')).toBe(false);
    });
    
    it('should not have a pink bunnies subsystem', () => {
        expect(ship.hasSubSystem('pink-bunnies')).toBe(false);
    });
    
    it('should have a shield subsystem', () => {
        expect(ship.hasSubSystem('shield')).toBe(true);
    });
});
