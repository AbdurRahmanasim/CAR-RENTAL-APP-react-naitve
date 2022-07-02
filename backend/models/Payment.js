const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  card: {
    type: String,
  },
  
  cardno: {
    type: String,
  },

  expirydate: {
    type: String,
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
});

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel;
