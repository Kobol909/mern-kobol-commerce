const express = require('express');
const router = express.Router();

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @route   POST api/payment/create-checkout-session
// @desc    Create checkout session
// @access  Public
router.post('/create-payment-intent', async (req, res) => {
  const { amount, cartItemsDetails } = req.body.data;
  const amountRounded = Math.round(amount * 100);

  const itemsInCart = cartItemsDetails.map((item) => {
    return {
      quantity: item.quantity,
      price: item.price
    };
  });

  const calcCartTotal = itemsInCart.reduce((acc, item) => {
    return acc + item.quantity * item.price * 100; // multiply by 100 to get the amount in cents
  }, 0);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calcCartTotal,
    currency: 'eur',
    client_secret: process.env.STRIPE_CLIENT_SECRET,
    automatic_payment_methods: {
      enabled: true
    }
  });

  if (calcCartTotal !== amountRounded) {
    res.status(400).json({
      error: 'Amount sent does not match the total amount of the cart'
    });
  }

  res.json({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router;
