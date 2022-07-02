// Schemas
const feedbackModel = require("../models/Feedback");

const ShowFeedbackController = async (req, res) => {

  try{
    const getFeeds = await feedbackModel.find({}).sort({
        created_on: "-1",
    });

    res.send(getFeeds);

} catch (err) {

    res.json({"ERROR": "Feedback Not Found"});

}

  // feedbackModel.find({}, (err, data) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(data);
  //   }
  // });
};

module.exports = ShowFeedbackController;
