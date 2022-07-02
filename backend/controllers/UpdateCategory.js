const categoryModel = require("../models/Categories");

const EditHotel = (req, res) => {
  const body = req.body;

  const { id } = req.params;

  categoryModel.findByIdAndUpdate({ _id: id }, body, { new: true }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

module.exports = EditHotel;
