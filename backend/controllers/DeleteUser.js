const DeleteModel = require("../models/Signup");

const DeleteUser = (req, res) => {

    const { id } = req.params

    console.log(id, "id")

    DeleteModel.findByIdAndDelete({ _id: id }, (error, data) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
};


module.exports = DeleteUser;
