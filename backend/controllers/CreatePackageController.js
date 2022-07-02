// Schemas
const packageModel = require("../models/Packages");

const CreatePackageController = async (req, res) => {
  const { packagename, packagedesc, packageprice } = req.body;

  if (!packagename || !packagedesc || !packageprice) {
    return res.json({ message: "Required fields are missing." });
  }

  const userObj = {
    ...req.body,
  };

  packageModel.create(userObj, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

module.exports = CreatePackageController;
