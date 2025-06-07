const express = require('express');
const { body } = require('express-validator');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const auth = require('../middleware/auth');

const router = express.Router();

// Public
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin only (add admin middleware for production)
const admin = require('../middleware/admin');

router.post('/', [
  auth,
  admin,
  body('name').notEmpty(),
  body('price').isNumeric(),
], createProduct);
router.put('/:id', auth, admin, updateProduct);
router.delete('/:id', auth, admin, deleteProduct);

module.exports = router;
