const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  packagename: {
    type: String,
  },
  packagedesc: {
    type: String,
  },
  packageprice: {
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

const packageModel = mongoose.model("package", packageSchema);

module.exports = packageModel;
