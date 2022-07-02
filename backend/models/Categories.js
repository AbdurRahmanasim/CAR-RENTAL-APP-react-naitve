const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  description: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
