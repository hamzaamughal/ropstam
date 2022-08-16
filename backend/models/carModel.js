const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;