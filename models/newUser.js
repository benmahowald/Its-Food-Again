var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// console.log('newUser Schema sourced');
var client = new Schema({
  bus_name: String,
  bus_phone: String,
  bus_type: String,
  contact_name: String,
  contact_email: String,
  address: {
    city: {type: String, required: true},
    state: {type: String, required: true},
    street: {type: String, required: true},
    zip: {type: Number, required: true}
  },
  admin: {type: Boolean, default: false, required: true}
});

var clients = mongoose.model('clients', client);
module.exports = clients;
