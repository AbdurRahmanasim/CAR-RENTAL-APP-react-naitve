const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  username: {
    type: String,
  },

  email: {
    type: String,
  },

  feedback: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  
});

const feedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports = feedbackModel;
