"use strict";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature with increaseTemperature method", () => {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases in temperature with decreaseTemperature method", () => {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum of 10 degrees", () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has power saving mode on by default", () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can switch PSM off", () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can switch PSM back on", () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  // normal temperature is 20, so i < 6, so as long as temperature
  // is less than 26.
  describe("when power saving mode is on", () => {
    it("has a maximum temperature of 25 degrees", () => {
      for (let i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
  // normal temperature is 20, so i < 13, so as long as temperature
  // is less than 33; Since maximum temperature is 32.
  describe("when power saving mode is off", () => {
    it("has a maximum temperature of 32 degrees", () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    it("can be reset to the default temperature", () => {
      for (let i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    describe("displaying usage levels", () => {
      describe("when the temperature is below 18 degrees", () => {
        it("it is considered low-usage", () => {
          for (let i = 0; i < 3; i++) {
            thermostat.decreaseTemperature();
          }
          expect(thermostat.energyUsage()).toEqual("low-usage");
        });
      });
    });

    describe("when the temperature is between 18 and 25 degrees", () => {
      it("it is considered medium-usage", () => {
        expect(thermostat.energyUsage()).toEqual("medium-usage");
      });
    });
  });

  describe("when the temperature is anything else", () => {
    it("it is considered high-usage", () => {
      thermostat.powerSavingMode = false;
      for (let i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});

// While i is less than 11, increment the value of i by 1.
// Set i = 0, condition is += 1.
// Our temperature property is situated between the {} of our
//  Thermostat object constructor function.

// PSM = Power Saving Mode
