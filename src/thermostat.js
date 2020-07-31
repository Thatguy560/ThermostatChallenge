"use strict";
// Object constructor function, here we're adding properties to our
// Object constructor function.
class Thermostat {
  constructor() {
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  increaseTemperature() {
    this.temperature++;
  }
  // if method? if after calling the decreaseTemperature method the thermostat
  // matches the minimum temperature then return the min temp of 10,
  // else increment the temperature by -1.
  decreaseTemperature() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  // Setting powerSavingMode equal to false suggesting we're now
  // turning power saving mode off.
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
  // If our current temperature is already set to the maximum limit,
  // we do nothing - otherwise we turn it increaseTemperature.
  increaseTemperature() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature++;
  }
  // This is saying if power saving mode is off then return
  // the max temperature of 32 degrees, otherwise if power saving
  // mode is ON then return the lower temperature to 25 degrees.
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  // Setting the temperature back to the default setting of 20.
  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "low-usage";
    } else if (
      (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT) &
      (this.temperature <= this.MAX_LIMIT_PSM_ON)
    ) {
      return "medium-usage";
    }
    return "high-usage";
  }
}
