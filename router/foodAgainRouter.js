// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

console.log('foodAgainRouter sourced');

// require model in route
var newClient = require('../models/newUser');
var newReport = require('../models/newReport');

router.get('/client', function (req, res) {
  console.log('in client get route');
  newClient.find({}, function (err, clients) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('find foodAvailable get route success!');
      res.send(clients);
    } // end else
  }); // end find get bussiness contact route
}); // end get route

// post route to post a new client
router.post('/client', function (req, res){
  console.log('in client post route');
  var data = req.body;
  console.log(data);
  var sendClient = new newClient({
    token: data.token,
    bus_name: data.business_name,
    bus_phone: data.business_number,
    bus_email: data.business_email,
    bus_type: data.business_type, // (option) 'bakery', 'grocery store', 'restaurant', 'other'
    bus_description: data.business_description,
    contact_name: data.contact_name,
    contact_email: data.contact_email,
    address: {
      city: data.city,
      state: data.state, //(option) list of states drop down
      street: data.street,
      zip: data.zip
    },
    admin: data.admin
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

// post route to post a new client
router.post('/client/report', function (req, res){
  console.log('in client/report post route');
  var data = req.body;
  console.log(data);
  var sendReport = new newReport({
    portions: data.portions,
    comment: data.comment,
    bus_name: data.bus_name,
    bus_id: data.bus_id
}); // end report object
sendReport.save(function(err){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  } else {
    console.log('sendReport save success');
    res.sendStatus(201);
  } // end else
}); // end sendClient save
}); // end put route
// export to router
module.exports = router;
