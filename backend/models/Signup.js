const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
  },

  lname: {
    type: String,
  },

  contact: {
    type: String,
  },

  address: {
    type: String,
  },

  username: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
  },

  role: {
    type: String,
    default: "customer",
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
  
});

const userModel = mongoose.model("customer", userSchema);

module.exports = userModel;
