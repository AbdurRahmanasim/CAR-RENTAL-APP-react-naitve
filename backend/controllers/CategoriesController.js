// Schemas
const categoryModel = require("../models/Categories");

const UpdateCategory = async (req, res) => {
  const { category, subcategory, description, price } = req.body;

  if (!category || !subcategory || !description || !price) {
    return res.json({ message: "Required fields are missing." });
  }

  const userObj = {
    ...req.body,
  };

  categoryModel.create(userObj, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

module.exports = UpdateCategory;
