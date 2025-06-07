const express = require('express');
const auth = require('../middleware/auth');
const { createPaymentIntent, handleWebhook } = require('../controllers/paymentController');

const router = express.Router();

router.post('/create-intent', auth, createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

module.exports = router;
