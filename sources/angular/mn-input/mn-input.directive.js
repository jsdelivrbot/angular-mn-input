angular
  .module('mn-input')
  .directive('mnInput', mnInputDirective)

function mnInputDirective($compile) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes) {
    const input = element.find('input')
    input.attr('ng-model', attributes.ngModel)
    $compile(input)(scope)

    const formName = element[0].closest('form').getAttribute('name')

    if (attributes.name && formName) {
      const messagesRule = 'formName.$submitted && formName.inputName.$error'
        .replace(/formName/g, formName)
        .replace(/inputName/g, attributes.name)

      const validations = [
        {
          name: 'required',
          text: 'is required',
        },
        {
          name: 'email',
          text: 'is invalid',
        },
      ]

      const label = element[0].querySelector('label')
      label.setAttribute('ng-messages', messagesRule)
      validations.forEach(setMessage)
      $compile(label)(scope)

      function setMessage(validation) {
        const message = document.createElement('span')
        message.setAttribute('ng-message', validation.name)
        message.textContent = ` ${validation.text}`
        label.appendChild(message)
      }
    }
  }
}
