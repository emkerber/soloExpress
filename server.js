//JavaScript

var express = require('express'); //incorporates Express library
var app = express(); //invokes Express
var path = require('path'); //incorporates path library

//to set up static file serving
app.use(express.static('public'));

//incorporates three modules copied locally from a previous assignment
var modOne = require('./modules/module1.js');
var modTwo = require('./modules/module2.js');
var modThree = require('./modules/module3.js');

//to listen on port 3000
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});

//to set up a new route for get requests to '/balance'
app.get('/balance', function(request, response){
  var balance = modThree.text + modThree.randomToUSD(100, 1000000);
  response.send(balance);
});
