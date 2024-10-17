const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: ['net_shading', 'borehole_drilling', 'poles'] },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);