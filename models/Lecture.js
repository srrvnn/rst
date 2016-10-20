var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LectureSchema = new Schema({
  _id: Schema.Types.ObjectId,
  batch_id: Number,
  date: Date
});

module.exports = mongoose.model('Lecture', LectureSchema);
