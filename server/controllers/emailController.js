const User = require('../models/User');
const sendMail = require('../utils/mailer');
const jwt = require('jsonwebtoken');

exports.sendVerificationEmail = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const url = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    await sendMail({
      to: user.email,
      subject: 'Verify your email',
      html: `<p>Click <a href='${url}'>here</a> to verify your email.</p>`
    });
    res.json({ message: 'Verification email sent' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.isEmailVerified = true;
    await user.save();
    res.json({ message: 'Email verified' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};

exports.sendPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();
    const url = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    await sendMail({
      to: user.email,
      subject: 'Reset your password',
      html: `<p>Click <a href='${url}'>here</a> to reset your password.</p>`
    });
    res.json({ message: 'Password reset email sent' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user || user.resetPasswordToken !== token || user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};
