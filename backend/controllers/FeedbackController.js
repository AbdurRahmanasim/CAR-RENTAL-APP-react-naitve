// Schemas
const feedbackModel = require('../models/Feedback');

const feedbackController = async (req, res) => {
    
  const {username, email, feedback} = req.body;

  if (
    !username ||
    !email ||
    !feedback 
  ) {
    return res.json({message: 'Required fields are missing.'});
  }


  const userObj = {
    ...req.body,
  };

  feedbackModel.create(userObj, (err, data) => {
    if (err) {
        res.send(err);
    } else {
        res.send(data)
    }
 });
};

module.exports = feedbackController;
