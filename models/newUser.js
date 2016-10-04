var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('newUser Schema sourced');

var businessSupply = new Schema({
  _id: Number,
  business_name: {type: String, required: true},
  business_number: {type: Number, required: true},
  business_email: {type: String, required: true},
  business_type: {type: String, required: true}, // (option) 'bakery', 'grocery store', 'restaurant', 'other'
  business_description: {type: String, required: true},
  contact_name: {type: String, required: true},
  contact_email: {type: String, required: true},
  address: {
    city: {type: String, required: true},
    state: String, //(option) list of states drop down
    street: {type: String, required: true},
    zip: {type: Number, required: true}
  },
  admin: {type: Boolean, default: false},
  portions: Number,
  portion_comment: String
});

var clients = mongoose.model('clients', businessSupply);
module.exports = clients;
