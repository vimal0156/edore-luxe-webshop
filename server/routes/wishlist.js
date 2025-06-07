const express = require('express');
const auth = require('../middleware/auth');
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist
} = require('../controllers/wishlistController');

const router = express.Router();

router.get('/', auth, getWishlist);
router.post('/add', auth, addToWishlist);
router.delete('/remove', auth, removeFromWishlist);

module.exports = router;
