// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

console.log('foodAgainRouter sourced');

// require model in route
var heroModel = require('../models/newUser');

router.get('/food', function (req, res) {
  console.log('in base get route');
  heroModel.find({}, function (err, clients) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('find foodAvailable get route success!');
      res.sendStatus(200);
    } // end else
  }); // end find get bussiness contact route
}); // end get route

router.post('/food', function (req, res){

}); // end post route
module.exports = router;
