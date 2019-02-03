window.mds = {
  // Code for the switch
  textField: function (element) {
    // Code for the TextField
    let getInputText = element.querySelector('.mds-text-field__input');
    let getTextLabel = element.querySelector('.mds-text-field__label');

    getInputText.addEventListener('focus', function () {
      getTextLabel.setAttribute('class', 'mds-text-field__label mds-text-field__label--active');
      getInputText.setAttribute('class', 'mds-text-field__input mds-text-field__input--active');
      element.setAttribute('style', 'border-Bottom: 2px solid purple');
    });
        getInputText.addEventListener('blur', function () {
          if (getInputText.value === '') {
            getTextLabel.setAttribute('class', 'mds-text-field__label');
            getInputText.setAttribute('class', 'mds-text-field__input');
            element.setAttribute('style', 'border-Bottom: 1px solid black');
          }
        });

  },
  switch: function (element) {
    let getSwitchName = element.querySelector('.mds-switch__SwitchName');
    let getSwitchState = element.querySelector('.mds-switch__SwitchState');
  let getMain = document.querySelector('.mainContent');

    getSwitchState.textContent = 'OFF';
    let switchStateOff = true;
    element.addEventListener('click', function () {
      if (switchStateOff === true) {
        getSwitchState.textContent = 'ON';
        getMain.setAttribute('class', 'mainContent mainContent--disabled');
        switchStateOff = false;
      }
      else if (switchStateOff === false) {
        getSwitchState.textContent = 'OFF';
        getMain.setAttribute('class', 'mainContent');
        switchStateOff = true;
      }
    });
  },
  checkbox: function (element) {
    // Future code
  },
  radioButton: function (element) {
    // Future code
  }
}
