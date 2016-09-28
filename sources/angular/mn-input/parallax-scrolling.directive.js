'use strict';

angular
  .module('mn-input')
  .directive('mnInput', parallaxScrollingDirective);

function parallaxScrollingDirective() {
  return {
    restrict: 'E',
    link,
  };

  function link(scope, element) {
    console.log('a mn-input founded');
    // parallaxScrolling(element[0]); // eslint-disable-line no-undef
  }
}
