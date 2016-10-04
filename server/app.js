// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
var path = require('path');
var port = process.env.PORT || 2727;
var mongoose = require('mongoose');

// static folder
app.use(express.static('public'));

//link server side router
var foodAgainRouter = require('../router/foodAgainRouter.js');
app.use(foodAgainRouter);

// link server to DB
var mongoURI = 'mongodb://localhost:27017/foodAgain';
var MongoDB = mongoose.connect(mongoURI).connection;

// spin up server
app.listen(port, function() {
  console.log('lisetning on pi server:', port);
});

// base url
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end base url

// static folder
app.use(express.static('public'));
