$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    // thermostat = new Thermostat();
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    // thermostat = new Thermostat();
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    // thermostat = new Thermostat();
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    // thermostat = new Thermostat();
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    // thermostat = new Thermostat();
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});