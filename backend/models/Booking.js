const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  username: {
    type: String,
  },
  
  email: {
    type: String,
  },

  contact: {
    type: String,
  },

  nic: {
    type: String,
  },

  address: {
    type: String,
  },

  ride: {
    type: String,
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;
