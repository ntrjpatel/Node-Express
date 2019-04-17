// server.js
const express = require("express");
const routes = require('./server/routes');
const bodyParser = require('body-parser');
//const config = require('./server/config');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
	next();
});

app.use('/', routes);
app.listen(3000);
console.log('app running on port ', (3000));