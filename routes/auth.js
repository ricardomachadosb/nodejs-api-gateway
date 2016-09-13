module.exports = function(app) {
  var authController = app.controllers.authController;
  app.post('/auth/authenticate', authController.authenticate);
  app.post('/auth/checkAuth', authController.checkAuth);
};
