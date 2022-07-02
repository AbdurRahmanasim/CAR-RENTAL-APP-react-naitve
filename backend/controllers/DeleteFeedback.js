const FeedbackModel = require("../models/Feedback");

const DeleteFeedback = (req, res) => {

    const { id } = req.params

    console.log(id, "id")

    FeedbackModel.findByIdAndDelete({ _id: id }, (error, data) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
};


module.exports = DeleteFeedback;
