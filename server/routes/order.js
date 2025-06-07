const express = require('express');
const auth = require('../middleware/auth');
const {
  placeOrder,
  getMyOrders,
  getOrderById
} = require('../controllers/orderController');

const router = express.Router();

router.post('/place', auth, placeOrder);
router.get('/my', auth, getMyOrders);
router.get('/:id', auth, getOrderById);

module.exports = router;
