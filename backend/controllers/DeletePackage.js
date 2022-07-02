const packageModel = require("../models/Packages");

const DeletePackage = (req, res) => {

    const { id } = req.params

    console.log(id, "id")

    packageModel.findByIdAndDelete({ _id: id }, (error, data) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
};


module.exports = DeletePackage;
