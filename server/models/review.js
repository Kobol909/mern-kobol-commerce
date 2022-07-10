const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: {
    type: [String],
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 40,
  },
  content: {
    type: [String],
    trim: true,
    minlength: 1,
    maxlength: 240,
  },
  value: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
});

mongoose.model('review', reviewSchema);
