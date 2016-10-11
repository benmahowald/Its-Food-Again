var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Report = new Schema ({
  bus_id: String,
  portions: {type: Number, default: 0 , required: true},
  comment: {type: String, default: 'Nothing is available at this time. Check back later for updates.', required: true},
  date_added: {type: Date, default: new Date(), required: true}
});

var reports = mongoose.model('reports', Report);
module.exports = reports;
