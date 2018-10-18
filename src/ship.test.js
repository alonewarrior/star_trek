describe('ship', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship();
  });
  describe('transfer energy', () => {
    it('should transfer energy to shield of -9002', () => {
      ship.transferEnergyBetweenShield(-9002);
      expect(ship.energyReserve).toBe(891000);
    });

    it('should not transfer more energy than max shield energy level', () => {
      ship.transferEnergyBetweenShield(1000);
      expect(ship.energyReserve).toBe(899002);
      expect(ship.getSubSystem('shield').energyLevel).toBe(10000);
    });

    it('should transfer energy to shield', () => {
      ship.transferEnergyBetweenShield(500);
      expect(ship.getSubSystem('shield').energyLevel).toBe(9501);
    });

    it('should transfer energy from reserve', () => {
      ship.transferEnergyBetweenShield(500);
      expect(ship.energyReserve).toBe(899501);
    });
  });

  it('should have an energy reserve of 900,001', () => {
    expect(ship.energyReserve).toBe(900001);
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
