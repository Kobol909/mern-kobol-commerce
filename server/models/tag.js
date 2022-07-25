const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: [String],
    required: true
  },
  value: {
    type: [String],
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true
  }
});

mongoose.model('tag', tagSchema);
