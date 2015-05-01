(function () {
angular.module('reviewModule')
  .filter('categoryFilter', categoryFilter);

  categoryFilter.$inject = ['$log'];
  function categoryFilter ($log) {

  }
})()