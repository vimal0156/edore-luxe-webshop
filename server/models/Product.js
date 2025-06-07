const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String },
  description: { type: String },
  stock: { type: Number, default: 0 },
  attributes: [{ key: String, value: String }],
  isNew: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
