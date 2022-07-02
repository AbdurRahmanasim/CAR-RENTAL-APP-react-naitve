const bcryptjs = require('bcryptjs');

// Schemas
const userModel = require('../models/Signup');

const SignupController = async (req, res) => {
    
  const {fname, lname, contact, address, username, email, password} = req.body;

  if (
    !fname ||
    !lname ||
    !contact ||
    !address ||
    !username ||
    !email ||
    !password
  ) {
    return res.json({message: 'Required fields are missing.'});
  }

  const hashPass = await bcryptjs.hash(password, 10);

  const userObj = {
    ...req.body,

    password: hashPass,
  };

  userModel.findOne({email}, (err, userData) => {
    if (err) {
      res.send(err);
    } else if (userData) {
      console.log(userData);
      // res.send(userData);
      res.json({message: 'Email address already exists.'});
    } else {
      userModel.create(userObj, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json({message: 'Successfully Registered.'});
          console.log(data);
        }
      });
    }
  });
};

module.exports = SignupController;
