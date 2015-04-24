(function () {
  angular.module('reviewModule')
         .controller('createTemplateCtrl', createTemplateCtrl);

  createTemplateCtrl.$inject = ['$scope', '$resource', '$log', 'reviewData', '$location'];
  function createTemplateCtrl ($scope, $resource, $log, reviewData, $location) {
    var vm = this;
    vm.checkOptions = {};
    vm.selectOptions = {};
    vm.temp = {};

    vm.temp.cat = '',
    vm.temp.check = {},
    vm.temp.select = {},
    vm.temp.text = [],
    vm.temp.rtf = [];

    vm.go = function (path) {
      $location.path(path);
    };

    vm.addCat = function () {
      $log.debug('Template for: ' + vm.temp.cat);
      vm.setCat = true;
    };

    vm.addText = function () {
      vm.temp.text.push(vm.text);
      $log.debug(vm.temp.text);
      vm.text = '';
    };

    vm.addRTF = function () {
      vm.temp.rtf.push(vm.rtf);
      $log.debug(vm.temp.rtf);
      vm.rtf = '';
    };

    vm.addCheck = function () {
      vm.temp.check[vm.check] = [];
      vm.check = "";
    };

    vm.addCheckOption = function (prop) {
      vm.temp.check[prop].push(vm.checkOptions[prop]);
      vm.checkOptions[prop] = '';
    };

    vm.addSelect = function () {
      vm.temp.select[vm.select] = [];
      vm.select = "";
    };

    vm.addSelectOption = function (prop) {
      vm.temp.select[prop].push(vm.selectOptions[prop]);
      vm.selectOptions[prop] = '';
    };

    vm.saveTemplate = function () {
      $log.debug(angular.toJson(vm.temp, true));
      reviewData.saveTemplate(vm.temp)
      .success(function (data, status, headers, config) {
        //$log.debug(data);
      })
      .error(function (data, status, headers, config) {
        $log.debug('ERROR!!!!');
      })
    };

    vm.clearTemplate = function () {
      vm.checkOptions = {};
      vm.selectOptions = {};
      vm.temp = {};

      vm.temp.cat = '',
      vm.temp.check = {},
      vm.temp.select = {},
      vm.temp.text = [],
      vm.temp.rtf = [];
    };

  }
})()