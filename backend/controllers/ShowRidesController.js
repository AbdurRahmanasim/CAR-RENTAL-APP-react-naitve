// Schemas
const bookingModel = require("../models/Booking");

const ShowRidesController = async (req, res) => {

  try{
    const getbookings = await bookingModel.find({}).sort({
        created_on: "-1",
    });

    res.send(getbookings);

} catch (err) {

    res.json({"ERROR": "Feedback Not Found"});

}

  // bookingModel.find({}, (err, data) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(data);
  //   }
  // });
};

module.exports = ShowRidesController;
