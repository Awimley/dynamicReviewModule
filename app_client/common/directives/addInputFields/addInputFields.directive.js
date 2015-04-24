(function () {
  angular.module('reviewModule')
    .directive('addInputFields', addInputFields);

  addInputFields.$inject = ['$log', '$compile'];
  function addInputFields ($log, $compile) {
    return {
      scope: false,/*{
        fieldName : '@',
        inputType : '@',
        ngModel   : '='
      },*/
      replace : true,
      link: function (scope, element, attr) {
        element.bind('click', function () {
          $log.debug(inputType);
          if(!attr.fieldName) {return;}
          angular.element(document.getElementById('reviewFields')).append($compile("\
            <div class='row form-group'>\
              <div class='col-xs-3'><label class='customInputGroup pull-right'>"+ attr.fieldName + ":</label></div>\
              <div class='col-xs-9'><input class='customInput' ng-model='vm." + String(attr.fieldName) +"'></div>\
            </div>")(scope));
        });
      }
    }
  }
})()