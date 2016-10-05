var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('newReport Schema sourced');

var Report = new Schema ({
  portions: Number,
  bus_name: String,
  bus_id: String,
  comment: String,
  date_added: {
    type: Date,
    default: new Date(),
    required: true
  }
});

var reports = mongoose.model('reports', Report);
module.exports = reports;
