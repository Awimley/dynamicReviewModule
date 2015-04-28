(function(){
angular.module('reviewModule')
       .service('reviewData', reviewData);

  reviewData.$inject = ['$http', '$log'];
  function reviewData($http, $log) {
    
    var storeImage = function(img) {
      //return $http.post('/image', img);
    };

    var getReviews = function () {
      return $http.get('/reviews');
    }

    var saveReview = function (data) {
      return $http.post('/reviews', data);
    };

    var deleteReview = function (id) {
      return;
    };

    var getTemplate = function (temp) {
      return $http.get('/template', temp);
    };

    var getTemplates = function () {
      return $http.get('/templates');
    };

    var saveTemplate = function (temp) {
      return $http.post('/templates', temp);
    };

    return {
      storeImage   : storeImage,
      getReviews   : getReviews,
      saveReview   : saveReview,
      deleteReview : deleteReview,
      getTemplate  : getTemplate,
      getTemplates : getTemplates,
      saveTemplate : saveTemplate
    };
  }
})()