var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
  _id: Schema.Types.ObjectId,
  lecture_id: Number,
  student_id: Number
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
