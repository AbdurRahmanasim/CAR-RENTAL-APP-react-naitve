const categoryModel = require("../models/Categories");

const DeleteCategory = (req, res) => {

    const { id } = req.params

    console.log(id, "id")

    categoryModel.findByIdAndDelete({ _id: id }, (error, data) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
};


module.exports = DeleteCategory;
