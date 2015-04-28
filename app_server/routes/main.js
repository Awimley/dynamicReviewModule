var ctrl = require('../controllers/main');

module.exports = function(app){
  app.post('/reviews', ctrl.saveReview);
  app.post('/deleteReview/:id', ctrl.deleteReview);
  app.post('/templates', ctrl.saveTemplate);

  app.get('/reviews', ctrl.getReviews);
  app.get('/templates', ctrl.getTemplates);
  app.get('/template', ctrl.getTemplate);
};