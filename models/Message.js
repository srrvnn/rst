var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// thoughts on whether a batch message must be converted to individual messages
// to each of the student in the batch are lingering.

// doing so loses informatino on whether a message was batch sent. a boolean maybe?

// and then how would be list all messages sent to this batch?

var MessageSchema = new Schema({
  // student_id: { type: Schema.Types.ObjectId, ref: 'Student' },
  // batch_id: { type: Schema.Types.ObjectId, ref: 'Batch'},
  content: { type: String }
});

module.exports = mongoose.model('Message', MessageSchema);
