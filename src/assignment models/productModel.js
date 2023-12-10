const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.01 // Assuming a positive value for the price
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value for stock.'
    }
  },
  category: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
    // This field is optional, so it's not marked as required
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
