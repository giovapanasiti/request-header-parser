var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

/*True API*/
var api = '/api/whoami';

app.get(api, function(req, res, next) {
  var language = req.acceptsLanguages();
  var software = req.get('User-Agent');
  var ipaddress = req.ip;

  res.json({ ip: ipaddress, language: language[0], software: software })
});

app.listen(3000, function() {
  console.log('Working');
});