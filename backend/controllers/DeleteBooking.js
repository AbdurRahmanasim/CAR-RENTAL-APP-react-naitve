const bookingModel = require("../models/Booking");


const DeleteBooking = (req, res) => {

    const { id } = req.params

    console.log(id, "id")

    bookingModel.findByIdAndDelete({ _id: id }, (error, data) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
};


module.exports = DeleteBooking;