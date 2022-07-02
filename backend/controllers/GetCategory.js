// Schemas
const categoryModel = require("../models/Categories");

const GetcategoryController = async (req, res) => {
 
  try{
    const getCategory = await categoryModel.find({}).sort({
        created_on: "-1",
    });

    res.send(getCategory);

} catch (err) {

    res.json({"ERROR": "Category Not Found"});

}
  // categoryModel.find({}, (err, data) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(data);
  //   }
  // });
};

module.exports = GetcategoryController;


