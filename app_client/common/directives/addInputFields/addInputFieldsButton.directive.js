(function () {
  angular.module('reviewModule')
    .directive('addInputFieldsButton', addInputFieldsButton);

  addInputFieldsButton.$inject = ['$log'];
  function addInputFieldsButton ($log) {
    return {
      restrict : 'E',
      template : '<input id="fieldName" placeholder="Enter field name:"></input>\
        <button id="addFieldBtn" addInputFields><span class="glyphicon glyphicon-plus"></span></button>'
    };
  };
})()