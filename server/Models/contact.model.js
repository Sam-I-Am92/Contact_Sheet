// inport mongoose
const mongoose = require('mongoose');

// define contact schema
const contactSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);