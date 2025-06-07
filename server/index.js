const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
// Add: product, order, cart, wishlist routes as you build them

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
const wishlistRoutes = require('./routes/wishlist');
app.use('/api/wishlist', wishlistRoutes);

const paymentRoutes = require('./routes/payment');
app.use('/api/payment', paymentRoutes);

const path = require('path');
const uploadRoutes = require('./routes/upload');
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const emailRoutes = require('./routes/email');
app.use('/api/email', emailRoutes);

// Swagger/OpenAPI docs
require('./docs/swagger-setup')(app);

// Health check
app.get('/', (req, res) => {
  res.send('API is running');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/edore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
