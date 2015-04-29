(function () {
  angular.module('reviewModule')
         .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', '$resource', '$log', 'reviewData', '$location', '$route'];
  function homeCtrl ($scope, $resource, $log, reviewData, $location, $route) {
    var vm = this;
    var Files = $resource('/images', {  });

    reviewData.getTemplates()
    .success(function (data) {
      vm.templates = data;
    })
    .error(function (err) {
      $log.debug(err);
    });

    reviewData.getReviews()
    .success(function (data) {
      vm.reviews = data;
    })
    .error(function (err) {
      $log.debug(err);
    });

    vm.form = {},
    vm.form.text={},
    vm.form.rtf={},
    vm.form.select={},
    vm.form.check={};

    vm.fieldName = '',
    vm.proInput = '',
    vm.conInput = '',
    vm.pros = [],
    vm.cons = [],
    vm.stars = [],
    vm.fields = [],
    vm.exit = 0,
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

    vm.loadReview = function () {
      $log.debug(vm.review);
      tinyMCE.get("mce").setContent(vm.review.rtf.reviewText);
      vm.rating = vm.review.rating;
      vm.pros = vm.review.pros;
      vm.cons = vm.review.cons;
      vm.form.text = vm.review.text;
      vm.form.rtf = vm.review.rtf;
      vm.form.check = vm.review.check;
      vm.form.select = vm.review.select;
      vm.form.user = vm.review.user;
      vm.form._id = vm.review._id;
      $log.debug(vm.form._id);
    };

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
        angular.forEach(vm.pros, function (v, i) {
          if (v == vm.proInput) {
            $log.debug(v);
            vm.pros.splice(vm.pros.indexOf(v), 1);
            vm.proInput = '';
            vm.exit = 1;
          }
        });
        if (vm.exit == 1) {
          vm.exit = 0;
          return 1;
        }
        vm.pros.push(vm.proInput);
        vm.proInput = '';
      }
    };

    vm.clearOnEnterCon = function (e) {
      if (e.keyCode == 13) {
        angular.forEach(vm.cons, function (v, i) {
          if (v == vm.conInput) {
            $log.debug(v);
            vm.cons.splice(vm.cons.indexOf(v), 1);
            vm.conInput = '';
            vm.exit = 1;
          }
        });
        if (vm.exit == 1) {
          vm.exit = 0;
          return 1;
        }
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
      if (!vm.template) {
        vm.error = 'Please create a template for your form. i.e.. unique category required.';
        return 1;
      }
      //Exporting the defaults (isolated 'form' object)
      vm.form.cons = vm.cons;
      vm.form.pros = vm.pros;
      vm.form.rtf["reviewText"] = tinyMCE.get("mce").getContent();
      vm.form.cat = vm.template.cat;
      vm.form.rating = vm.rating;

      reviewData.saveReview(vm.form)
      .success(function () {
        $route.reload();
      })
      .error(function (err) {
        vm.error = err;
      });
    };

    vm.go = function (path) {
      $location.path(path);
    };

    //Master clear
    vm.clearForms = function () {
      $route.reload();
    };
  }
})()