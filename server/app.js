// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var path = require('path');
var port = process.env.PORT || 2727;

// static folder
app.use(express.static('public'));

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
