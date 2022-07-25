const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'product',
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

mongoose.model('order', orderSchema);
