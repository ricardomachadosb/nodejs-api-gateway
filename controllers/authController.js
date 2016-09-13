var request = require('request');

module.exports = function(app) {

  var SW_AUTH_URL = app.utils.constants.SW_AUTH_URL;
  var SW_AUTH_VERSION = app.utils.constants.SW_AUTH_VERSION;

  var AuthController = {

    authenticate: function(req, res) {

      request.post(SW_AUTH_URL + '/' + SW_AUTH_VERSION + '/authenticate',
          { json: req.body }, function (error, response, body) {
              res.status(response.statusCode).send(body);
          }
      );

    },

    checkAuth: function(req, res, next) {
      request.post(SW_AUTH_URL + '/' + SW_AUTH_VERSION + '/checkAuth',
          { json: req.body }, function (error, response, body) {
              res.status(response.statusCode).send(body);
          }
      );
    }

  };
  return AuthController;
}
