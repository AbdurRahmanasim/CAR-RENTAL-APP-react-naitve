// Schemas
const bookingModel = require("../models/Booking");

const bookingController = async (req, res) => {
  const { username, email, contact, nic, address, ride } = req.body;

  if (!username || !email || !contact || !nic || !address || !ride ) {
    return res.json({ message: "Required fields are missing." });
  }

  const userObj = {
    ...req.body,
  };

  bookingModel.create(userObj, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

module.exports = bookingController;
