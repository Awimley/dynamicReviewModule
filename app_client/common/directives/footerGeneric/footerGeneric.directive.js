(function () {

  angular
  .module('reviewModule')
  .directive('footerGeneric', footerGeneric);

  function footerGeneric() {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/footerGeneric/footerGeneric.template.html'
    };
  }
})()