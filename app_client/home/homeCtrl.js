(function () {
  angular.module('reviewModule')
         .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', '$resource', '$log', 'reviewData', '$location'];
  function homeCtrl ($scope, $resource, $log, reviewData, $location) {
    reviewData.getTemplates()
    .success(function (data) {
      vm.templates = data;
    })
    .error(function (err) {
      $log.debug(err);
    })

    var vm = this;
    var Files = $resource('/images', {  });

    vm.form = {};
    vm.form.text={};
    vm.form.rtf={};
    vm.form.select={};
    vm.form.check={};

    vm.fieldName = '',
    vm.proInput = '',
    vm.conInput = '',
    vm.pros = [],
    vm.cons = [],
    vm.stars = [],
    vm.fields = [],
    vm.areYouSure = 0,
    vm.rating = 0,
    vm.ratings = [
    {
      name: "zero",
      num: 0
    },{
      name: "one",
      num: 1
    },{
      name: "two",
      num: 2
    },{
      name: "three",
      num: 3
    },{
      name: "four",
      num: 4
    },{
      name: "five",
      num: 5
    }];

    vm.makeArray = function (num) {
      vm.stars = new Array(num);
      return vm.stars;
    };

    /*angular.extend($scope, {
      model: { file: null },
      upload: function(model) {
        Files.prototype.$save.call(model.file, function(self, headers) {
            //portalData.storeImage(self);
        });
      }
    });
    */
    vm.inputTypes = ['select', 'input', 'mceEditor', 'checkbox'];
    vm.addField = function (e) {
      console.log('tryna add a field?');
    };

    //Clear fields section. could probalby DRY this.
    vm.clearOnEnterPro = function (e) {
      if (e.keyCode == 13) {
        vm.pros.push(vm.proInput);
        vm.proInput = '';
      }
    };
    vm.clearOnEnterCon = function (e) {
      if (e.keyCode == 13) {
        vm.cons.push(vm.conInput);
        vm.conInput = '';
      }
    };
    vm.clearOnEnterField = function (e) {
      if (e.keyCode == 13) {
        vm.fieldName = '';
      }
    };

    //Master export function
    vm.saveReview = function () {
      $log.debug('Pros:');
      angular.forEach(vm.cons, function (v,i) {
        $log.debug(v);
      });

      $log.debug('Cons:');
      angular.forEach(vm.pros, function (v,i) {
        $log.debug(v);
      });
    }

    vm.go = function (path) {
      $location.path(path);
    };

    //Master clear
    vm.clearForms = function () {
      document.getElementById('prosUl').innerHTML = '';
      document.getElementById('consUl').innerHTML = '';
      tinyMCE.get("mce").setContent('');
      vm.areYouSure = 0;

      $log.debug(reviewData.getTemplate(''));
    };
  }
})()