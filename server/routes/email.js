const express = require('express');
const auth = require('../middleware/auth');
const {
  sendVerificationEmail,
  verifyEmail,
  sendPasswordReset,
  resetPassword
} = require('../controllers/emailController');

const router = express.Router();

router.post('/send-verification', auth, sendVerificationEmail);
router.get('/verify', verifyEmail);
router.post('/send-reset', sendPasswordReset);
router.post('/reset', resetPassword);

module.exports = router;
