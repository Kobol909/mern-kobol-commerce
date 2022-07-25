const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

mongoose.model('comment', commentSchema);
