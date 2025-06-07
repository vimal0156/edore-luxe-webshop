const Stripe = require('stripe');
const Order = require('../models/Order');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = 'usd', orderId } = req.body;
    // Optionally, validate the order exists and belongs to the user
    if (orderId) {
      const order = await Order.findById(orderId);
      if (!order || order.user.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Invalid order' });
      }
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects cents
      currency,
      metadata: { orderId: orderId || '' },
      receipt_email: req.user.email
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle event types (e.g., payment_intent.succeeded)
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    // Update order/payment status in DB if needed
  }
  res.json({ received: true });
};
