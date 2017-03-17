var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// remember student can be a part of many batches
// example weak students from all batches form a batch with special classes

var StudentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"]},
  school: { type: String, required: true },
  student_facebook: { type: String, default: '' },
  student_phone: { type: Number },
  parent_phone: { type: Number, required: true },
  student_email: { type: String },
  parent_email: { type: String },
  current_batch_id: { type: Number },
  current_standard: { type: Number, min: 1, max: 12, default: 10 },
  past_batch_ids: [Number]
});

module.exports = mongoose.model('Student', StudentSchema);
