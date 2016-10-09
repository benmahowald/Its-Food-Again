var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// console.log('newUser Schema sourced');

var businessSupply = new Schema({
  token: String,
  bus_name: String,
  bus_phone: String,
  bus_type: String,
  contact_name: String,
  contact_email: String,
  address: {
    city: String,
    state: String,
    street: String,
    zip: Number
  },
  admin: {type: Boolean, default: false, required: true}
});

var clients = mongoose.model('clients', businessSupply);
module.exports = clients;
