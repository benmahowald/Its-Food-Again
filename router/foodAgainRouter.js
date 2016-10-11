 // establish technologies
var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');

// console.log('foodAgainRouter sourced');

// require model in route
var newClient = require('../models/newUser');
var newReport = require('../models/newReport');

// route to retrieve all clients
router.get('/client', function (req, res) {
  console.log('in client get route');
  newClient.find({}, function (err, clients) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('find clients get route success!');
      res.send(clients);
    } // end else
  }); // end find get clients route
}); // end get route

// route to retrieve all reports
router.get('/reports', function (req, res) {
  console.log('in reports get route');
  newReport.find({}, function (err, reports) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('find reports get route success!');
      res.send(reports);
    } // end else
  }); // end find get reports route
}); // end get route

// post route to post a new client
router.post('/client', function (req, res){
  console.log('in client post route');
  var data = req.body;
  console.log('data:', data);
  var sendClient = new newClient({
    bus_name: data.bus_name,
    bus_phone: data.bus_phone,
    bus_email: data.bus_email,
    bus_type: data.bus_type,
    contact_name: data.contact_name,
    contact_email: data.contact_email,
    address: {
      city: data.address.city,
      state: data.address.state,
      street: data.address.street,
      zip: data.address.zip
    }
  });
  console.log('sendClient:', sendClient);
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
router.post('/report/:id?', function (req, res){
  console.log('in client/report post route');
  console.log('req params:', req.params.id);
    newClient.update(req.params.id, {$push: {portion: req.body.report.portions, comment: req.body.report.comment}}, function (err, report) {
      if (err) {
        console.log('didn"t do anything lozah');
        res.sendStatus(500);
      }else {
        console.log('no err in if statement');
        // res.send(report);
      } // end else
    }); // end newClient update
  var data = req.body;
  console.log('data:',data);
  var sendReport = new newReport({
    bus_id: req.params.id,
    portions: data.report.portions,
    comment: data.report.comment,
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
}); // end post route
// export to router
module.exports = router;
