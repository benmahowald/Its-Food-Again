var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('newUser Schema sourced');

var businessSupply = new Schema({
  token: String,
  bus_name: String,
  bus_phone: Number,
  bus_email: String,
  bus_type: String, // (option) 'bakery', 'grocery store', 'restaurant', 'other'
  bus_description: String,
  contact_name: String,
  contact_email: String,
  address: {
    city: String,
    state: String, //(option) list of states drop down
    street: String,
    zip: Number
  },
  admin: Boolean
});

var clients = mongoose.model('clients', businessSupply);
module.exports = clients;
