var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BatchSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  academic_year: { type: Number, min: 2000, max: 2025, default: new Date().getFullYear },
  standard: { type: Number, min: 1, max: 12, default: 10 },
  lecture_schedule: [
    {
      day_index: { type: Number, min: 0, max: 6 },
      hour: { type: Number, min: 0, max: 23 },
      minutes: { type: Number, min: 0, max: 59 }
    }
  ],
  test_schedule: [
    {
      day_index: { type: Number, min: 0, max: 6 },
      hour: { type: Number, min: 0, max: 23 },
      minutes: { type: Number, min: 0, max: 59 }
    }
  ],
  number_of_students: { type: Number, default: 0 },
  passed: Boolean,
  note: String
});

module.exports = mongoose.model('Batch', BatchSchema);
