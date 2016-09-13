var express        = require('express');
var app            = express();
var load           = require('express-load');
var bodyParser     = require('body-parser');
var router         = express.Router();

app.set('router', router);
app.use(router);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

load('./utils')
  .then('./controllers')
	.then('./routes')
	.into(app);

var http = require('http').Server(app);

var port = process.env.PORT || 8081;

http.listen(port);

console.log('sw-api-gateway listening on port ' + port);

exports = module.exports = app;
