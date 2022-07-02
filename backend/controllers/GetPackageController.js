// Schemas
const packageModel = require("../models/Packages");

const GetPackageController = async (req, res) => {
  try{
    const getPackage = await packageModel.find({}).sort({
        created_on: "-1",
    });

    res.send(getPackage);

} catch (err) {

    res.json({"ERROR": "Package Not Found"});

}
 
  // packageModel.find({}, (err, data) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(data);
  //   }
  // });
};

module.exports = GetPackageController;
