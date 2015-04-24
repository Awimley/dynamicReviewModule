(function () {
angular.module('reviewModule')
  .filter('htmlSafe', htmlSafe);

  function htmlSafe () {
    return function (text) {
      var output = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      return output;
    };
  }
})()
