(function(){
angular.module('reviewModule')
       .service('reviewData', reviewData);

  reviewData.$inject = ['$http', '$log'];
  function reviewData($http, $log) {
    
    var storeImage = function(img) {
      //return $http.post('/image', img);
    };
    var saveReview = function (data) {
      console.log(tinyMCE.get("mce").getContent());
      return $http.post('/reviews', data);
    };
    var deleteReview = function (id) {
      return;
    };

    var getTemplate = function (cat) {
      return $http.get('/templates', cat);
    };

    var getTemplates = function () {
      return $http.get('/templates');
    };

    var saveTemplate = function (temp) {
      console.log('saving template...');
      return $http.post('/templates', temp);
    };

    return {
      storeImage   : storeImage,
      saveReview   : saveReview,
      deleteReview : deleteReview,
      getTemplate  : getTemplate,
      getTemplates : getTemplates,
      saveTemplate : saveTemplate
    };
  }
})()