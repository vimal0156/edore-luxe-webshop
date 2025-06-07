const express = require('express');
const auth = require('../middleware/auth');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');

const router = express.Router();

router.get('/', auth, getCart);
router.post('/add', auth, addToCart);
router.put('/update', auth, updateCartItem);
router.delete('/remove', auth, removeFromCart);
router.delete('/clear', auth, clearCart);

module.exports = router;
