angular
  .module('mn-input')
  .directive('mnInput', MnInputDirective)

function MnInputDirective($compile, MnInput) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes) {
    let input = element.find('input')
    input.attr('ng-model', attributes.ngModel)
    $compile(input)(scope)

    let formName = element[0].closest('form').name

    if (attributes.name && formName) {
      let messagesRule = 'formName.$submitted && formName.inputName.$error'
        .replace(/formName/g, formName)
        .replace(/inputName/g, attributes.name)

      let validations = []
      Object.keys(MnInput.messages).forEach(setValidations)

      function setValidations(name) {
        const text = MnInput.messages[name]
        const validation = {
          name,
          text,
        }
        validations.push(validation)
      }

      let label = element[0].querySelector('label')
      label.setAttribute('ng-messages', messagesRule)
      validations.forEach(setMessage)
      $compile(label)(scope)

      function setMessage(validation) {
        let message = document.createElement('span')
        message.setAttribute('ng-message', validation.name)
        message.textContent = ` ${validation.text}`
        label.appendChild(message)
      }
    }
  }
}
