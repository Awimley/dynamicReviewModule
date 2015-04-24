(function(){
  angular.module('reviewModule')
      .controller('questionsCtrl', questionsCtrl);

  questionsCtrl.$inject = ['$log'];
  function questionsCtrl($log) {
    var vm = this;

    vm.questions = {
      content : [
        'is this question 1?',
        'is this question 2?',
        'This seems like question 3, but is it?'
      ]
    }
    $log.debug('we made it to the questions controller');

  }

})()