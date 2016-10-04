// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

console.log('foodAgainRouter sourced');

// require model in route
var newClient = require('../models/newUser');

router.get('/food', function (req, res) {
  console.log('in base get route');
  newClient.find({}, function (err, clients) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('find foodAvailable get route success!');
      res.send('get route working');
    } // end else
  }); // end find get bussiness contact route
}); // end get route

// post route to post a new client
router.post('/food', function (req, res){
  console.log('in post route');
  var data = req.body;
  console.log(data);
  var sendClient = new newClient({
    token: data.token,
    business_name: data.business_name,
    business_number: data.business_number,
    business_email: data.business_email,
    business_type: data.business_type, // (option) 'bakery', 'grocery store', 'restaurant', 'other'
    business_description: data.business_description,
    contact_name: data.contact_name,
    contact_email: data.contact_email,
    address: {
      city: data.city,
      state: data.state, //(option) list of states drop down
      street: data.street,
      zip: data.zip
    },
    admin: data.admin,
    portions: data.portions,
    portion_comment: data.portion_comment
  });
  sendClient.save(function(err){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('sendClient save success');
      res.sendStatus(201);
    } // end else
  }); // end sendClient save
}); // end post route

// export to router
module.exports = router;
