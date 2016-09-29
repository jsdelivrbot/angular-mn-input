'use strict';

angular
  .module('mn-input')
  .directive('mnInput', mnInputDirective);

function mnInputDirective($compile) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  };

  function link(scope, element, attributes) {
    let input = element.find('input');
    input.attr('ng-model', attributes.ngModel);
    $compile(input)(scope);

    let formName = element[0].closest('form').name;

    if (attributes.name && formName) {
      let messagesRule = '(formName.$submitted || formName.inputName.$touched) && formName.inputName.$error'
        .replace(/formName/g, formName)
        .replace(/inputName/g, attributes.name);

      let validations = [
        {
          name: 'required',
          text: 'Required field',
        },
        {
          name: 'email',
          text: 'Invalid email address',
        },
      ];

      let messages = document.createElement('small');
      messages.classList.add('message');
      messages.setAttribute('ng-messages', messagesRule);
      validations.forEach(setMessage);
      element[0].appendChild(messages);
      $compile(messages)(scope);

      function setMessage(validation) {
        let message = document.createElement('span');
        message.setAttribute('ng-message', validation.name);
        message.textContent = validation.text;
        messages.appendChild(message);
      }
    }
  }
}
