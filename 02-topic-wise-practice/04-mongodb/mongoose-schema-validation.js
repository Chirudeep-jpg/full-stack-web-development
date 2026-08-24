const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, min: 0, required: true }
});