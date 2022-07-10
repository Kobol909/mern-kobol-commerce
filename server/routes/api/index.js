/**
 *  API Routes root
 *  ===============
 */
require('dotenv').config();

const express = require('express');
const router = express.Router();
const stripe = require('stripe');

const authRoutes = require('./auth');
const checkoutRoutes = require('./checkout');
// const couponsRoutes = require('./coupon');
// const customersRoutes = require('./customer');
// const ordersRoutes = require('./order');
// const productAttributeRoutes = require('./productAttribute');
// const productCategoryRoutes = require('./productCategory');
// const productReviewRoutes = require('./productReview');
const paymentRoutes = require('./payment');
const productsRoutes = require('./products');
// const productTagRoutes = require('./productTag');
const profilesRoutes = require('./profiles');
// const refundsRoutes = require('./refund');
// const reportRoutes = require('./report');
const statusRoutes = require('./status');
// const taxClassRoutes = require('./taxClass');
// const taxRateRoutes = require('./taxRate');
const usersRoutes = require('./users');

router.use('/auth', authRoutes);
router.use('/checkout', checkoutRoutes);
// router.use('/coupon', couponsRoutes);
// router.use('/customer', customersRoutes);
// router.use('/order', ordersRoutes);
router.use('/payment', paymentRoutes);
// router.use('/productAttribute', productAttributeRoutes);
// router.use('/productCategory', productCategoryRoutes);
// router.use('/productReview', productReviewRoutes);
router.use('/products', productsRoutes);
// router.use('/productTag', productTagRoutes);
router.use('/profiles', profilesRoutes);
// router.use('/refund', refundsRoutes);
// router.use('/report', reportRoutes);
router.use('/status', statusRoutes);
// router.use('/taxClass', taxClassRoutes);
// router.use('/taxRate', taxRateRoutes);
router.use('/user', usersRoutes);

/**
 * Stripe API Routes
 * =================
 *
 */
// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

router.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

router.post('/v1/prices', async (req, res) => {
  // Set your secret key. Remember to switch to your live secret key in production.
  // See your keys here: https://dashboard.stripe.com/apikeys
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const price = await stripe.prices.create({
    currency: 'eur',
    unit_amount: 120000,
    product_data: { name: 'Kbl test product' }
  });

  res.send(price);
});

module.exports = router;
