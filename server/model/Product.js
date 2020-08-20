const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    description: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    price: {
      type: Number,
      required: true,
      min: 8,
      max: 1024
    },
    imageUrl: {
      type: String,
      required: false,
      min: 8,
      max: 1024
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
