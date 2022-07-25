const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: [String],
      required: true
    },
    content: {
      type: [String],
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'tag',
      required: true
    }
  },
  { timestamps: true }
);

mongoose.model('post', postSchema);
