var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('newUser Schema sourced');

var businessSupply = new Schema({
  token: String,
  date_added: {
    type: Date,
    default: new Date(),
    required: true
  },
  business_name: String,
  business_number: Number,
  business_email: String,
  business_type: String, // (option) 'bakery', 'grocery store', 'restaurant', 'other'
  business_description: String,
  contact_name: String,
  contact_email: String,
  address: {
    city: String,
    state: String, //(option) list of states drop down
    street: String,
    zip: Number
  },
  admin: Boolean,
  portions: Number,
  portion_comment: String
});

var clients = mongoose.model('clients', businessSupply);
module.exports = clients;
