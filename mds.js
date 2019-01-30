window.mds = {
  // Code for the switch
  textField: function (element) {
    // Code for the TextField
    let getInputText = element.querySelector('.mds-text-field__input');
    let getTextLabel = element.querySelector('.mds-text-field__label');

    getInputText.addEventListener('focus', function () {
      getTextLabel.setAttribute('class', 'mds-text-field__label mds-text-field__label--onClick');
      getInputText.setAttribute('class', 'mds-text-field__input mds-text-field__input--typeText');
      element.setAttribute('style', 'border-Bottom: 2px solid purple');
    });
    getInputText.addEventListener('blur', function () {
      getTextLabel.setAttribute('class', 'mds-text-field__label');
      getInputText.setAttribute('class', 'mds-text-field__input');
      getInputText.value = '';
      element.setAttribute('style', 'border-Bottom: 1px solid black');
    });
    // element.removeEventListener('click', function);
    // element.removeEventListener('blur', function);
  },
  switch: function (element) {
    let getSwitchLabel = element.querySelector('.mds-switch__label');
  let getMain = document.querySelector('.mainContent');
    let getDisabledlabel = document.querySelector('.header h3');

    getSwitchLabel.textContent = 'OFF';
    let switchStateOff = true;
    element.addEventListener('click', function () {
      console.log('refdv');
      if (switchStateOff === true) {
        getSwitchLabel.textContent = 'ON';
        getMain.setAttribute('class', 'mainContent mainContent--disabled');
        getDisabledlabel.setAttribute('style', 'display: block');
        switchStateOff = false;
      }
      else if (switchStateOff === false) {
        getSwitchLabel.textContent = 'OFF';
        getMain.setAttribute('class', 'mainContent');
        getDisabledlabel.setAttribute('style', 'display: none');
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
