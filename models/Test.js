var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  d: { type: Date, default: Date.now },
  name: String
});

module.exports = mongoose.model('Test', TestSchema);
