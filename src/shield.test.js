describe('shield', function() {
  let shield;
  beforeEach(() => {
    shield = new Shield();
  });

  it('should have max energy capacity of 10000', () => {
    expect(shield.maxEnergyLevel).toBe(10000);
  });

  it('should not be damaged', function() {
    expect(shield.isDamaged).toBe(false);
  });

  it('should lower shield if shield is raised and energy level is depleted', function() {
    shield.raise();
    shield.hit(9001);
    expect(shield.energyLevel).toBe(0);
    expect(shield.isUp).toBe(false);
  });

  it('should absorb damage if raised', function() {
    shield.raise();
    shield.hit(500);
    expect(shield.energyLevel).toBe(8501);
  });

  it('should not absorb damage if not raised', function() {
    shield.hit(500);
    expect(shield.energyLevel).toBe(9001);
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

  it('should accept an initial energy level of 5000', function() {
    shield = new Shield(5000);
    expect(shield.energyLevel).toBe(5000);
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
