(function () {
  angular.module('reviewModule')
    .directive('prosAndCons', prosAndCons);

  prosAndCons.$inject = ['$log', '$compile'];
  function prosAndCons ($log, $compile) {
    var vm = this;
    return {
      scope: {
       proInput: '@',
       conInput: '@'
      },
      link: function (scope, element, attr) {

        if (attr.pro == 1) {
          $log.debug(attr);
          element.bind('click', function () {
            if (!attr.proInput) {return;}
            $log.debug('enter pressed, adding a pro:' + attr.proInput);
            angular.element(document.getElementById('prosUl')).append($compile("\
              <li>"+attr.proInput+"</li>"
              +"")(scope));
          });
        }

        if (attr.con == 1) {
          element.bind('click', function () {
            if (!attr.conInput) {return;}
            $log.debug('enter pressed, adding a con:' + attr.conInput);
            angular.element(document.getElementById('consUl')).append($compile("\
              <li>"+attr.conInput+"</li>"
              +"")(scope));
          });
        }

      }
    }
  }
})()