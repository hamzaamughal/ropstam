const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['bus', 'sedan', 'suv', 'hatchback'],
  },

}, {
  timestamps: true
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;