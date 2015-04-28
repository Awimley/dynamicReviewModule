(function () {
  angular.module('reviewModule')
         .controller('createTemplateCtrl', createTemplateCtrl);

  createTemplateCtrl.$inject = ['$scope', '$resource', '$log', 'reviewData', '$location', '$route'];
  function createTemplateCtrl ($scope, $resource, $log, reviewData, $location, $route) {
    var vm = this;
    vm.exit = 0;
    vm.areYouSure = false;

    vm.checkOptions = {};
    vm.selectOptions = {};
    vm.temp = {};
    vm.repOpt = false; //For keeping track of which options are repeated.

    reviewData.getTemplates()
    .success(function (data) {
      vm.temps = data;
    })
    .error(function (err) {
      $log.debug(err);
    });

    vm.temp.cat = '',
    vm.temp.check = {},
    vm.temp.select = {},
    vm.temp.text = [],
    vm.temp.rtf = [];

    vm.go = function (path) {
      $location.path(path);
    };

    vm.addCat = function () {
      vm.error = '';
      vm.setCat = true;

      angular.forEach(vm.temps, function (v, i) {
        $log.debug(v.cat);
        if (vm.temp.cat == v.cat) {
          vm.error = "Template category already taken. Be specific!"; 
          vm.setCat = false;
          return;
        }
      });
    };

    vm.addText = function () {
      if (!vm.temp.text[0]) {
        $log.debug('no text objects, skipping duplicates check.');
        vm.temp.text.push(vm.text);
        vm.text = '';
      } else {
        angular.forEach(vm.temp.text, function (v, i) {
          if (vm.text == v) {
            vm.temp.text.splice(vm.temp.text.indexOf(vm.text), 1);
            vm.text = '';
            vm.exit = 1;
            return;
          }
        });
        if (vm.exit == 1) {
          vm.exit = 0;
          return 1;
        }
        vm.temp.text.push(vm.text);
        vm.text = '';
      }
    };

    vm.addRTF = function () {
      if (!vm.temp.rtf[0]) {
        $log.debug('no rtf objects, skipping duplicates check.');
        vm.temp.rtf.push(vm.rtf);
        vm.rtf = '';
      } else {
        angular.forEach(vm.temp.rtf, function (v, i) {
          if (vm.rtf == v) {
            vm.temp.rtf.splice(vm.temp.rtf.indexOf(vm.rtf), 1);
            vm.rtf = '';
            vm.exit = 1;
            return 1;
          } 
        });
        if (vm.exit == 1) {
          vm.exit = 0;
          return 1;
        }
        vm.temp.rtf.push(vm.rtf);
        vm.rtf = '';
      }
    };

    vm.addCheck = function () {
      if (!vm.temp.check[vm.check]) {
        vm.temp.check[vm.check] = []; //initiate
        vm.check = "";
      }
      delete vm.temp.check[vm.check];
      vm.check = "";
    };

    vm.addCheckOption = function (prop) {
      if (!vm.temp.check[prop][0]) {
        $log.debug('first prop, allow it with no duplicate checks.');
        vm.temp.check[prop].push(vm.checkOptions[prop]);
        vm.checkOptions[prop] = '';
      } else {
        angular.forEach(vm.temp.check[prop], function (v, i) {
          if (v == vm.checkOptions[prop]) {
            $log.debug('repeated a check option.');
            vm.temp.check[prop].splice(vm.temp.check[prop].indexOf(vm.checkOptions[prop]), 1);
            vm.repOpt = true;
            return 1;
          }
        });
        if (vm.repOpt == true) {
          vm.repOpt = false;
          vm.checkOptions[prop] = '';
          return 1;
        } else {
          vm.temp.check[prop].push(vm.checkOptions[prop]);
          vm.checkOptions[prop] = '';
        }
      }
    };

    vm.addSelect = function () {
      if (!vm.temp.select[vm.select]) {
        vm.temp.select[vm.select] = []; //initiate
        vm.select = "";
      }
      delete vm.temp.select[vm.select];
      vm.select = "";
    };

    vm.addSelectOption = function (prop) {
      if (!vm.temp.select[prop][0]) {
        $log.debug('first prop, allow it with no duplicate checks.');
        vm.temp.select[prop].push(vm.selectOptions[prop]);
        vm.selectOptions[prop] = '';
      } else {
        angular.forEach(vm.temp.select[prop], function (v, i) {
          if (v == vm.selectOptions[prop]) {
            $log.debug('repeated a select option.');
            vm.temp.select[prop].splice(vm.temp.select[prop].indexOf(vm.selectOptions[prop]), 1);
            vm.repOpt = true;
            return 1;
          }
        });
        if (vm.repOpt == true) {
          vm.repOpt = false;
          vm.selectOptions[prop] = '';
          return 1;
        } else {
          vm.temp.select[prop].push(vm.selectOptions[prop]);
          vm.selectOptions[prop] = '';
        }
      }
    };

    vm.editCat = function () {
      vm.setCat = 0;
      vm.cat = '';
    }

    vm.saveTemplate = function () {
      $log.debug(angular.toJson(vm.temp, true));
      if (!vm.temp.cat) {
        vm.error = "A unique category is required."
        return 1;
      }
      reviewData.saveTemplate(vm.temp)
      .success(function (data, status, headers, config) {
        $log.debug('saved!' + data);
        $route.reload();
      })
      .error(function (data, status, headers, config) {
        $log.debug('ERROR!!!' + data);
      })
    };

    vm.clearTemplate = function () {
      vm.checkOptions = {};
      vm.selectOptions = {};
      vm.temp = {};
      vm.setCat = 0;
      vm.areYouSure = false;

      vm.temp.cat = '',
      vm.temp.check = {},
      vm.temp.select = {},
      vm.temp.text = [],
      vm.temp.rtf = [];
    };
  }
})()