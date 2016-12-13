// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
var path = require('path');
var port = process.env.PORT || 2727;
var mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);
// link server to DB
// var mongoURI = 'mongodb://<dbusername>:<password>@ds015334.mlab.com:15334/heroku_cpv005sw';

// process.env.MONGODB_URI will only be defined if you are running on Heroku
if(process.env.MONGODB_URI = undefined) {
    // use the string value of the environment variable
    var mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    var mongoURI = 'mongodb://localhost:27017/foodAgain';
}
var MongoDB = mongoose.connect(mongoURI).connectio;

// var MongoDB = mongoose.connect(mongoURI).connection;

// spin up server
app.listen(port, function() {
  console.log('listening on pi server:', port);
});

//link server side router
var foodAgainRouter = require('../router/foodAgainRouter.js');
app.use('/', foodAgainRouter);

// base url
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end base url

// static folder
app.use(express.static('public'));
