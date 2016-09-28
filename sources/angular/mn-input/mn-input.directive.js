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
  }
}
