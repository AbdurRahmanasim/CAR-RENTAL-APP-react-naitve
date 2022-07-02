const bcryptjs = require("bcryptjs");
const UserModel = require("../models/Signup");

const LoginController = (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {

    return res.json({ message: "Required field are missing" });

  }

  UserModel.findOne({ email }, async (error, user) => {

    if (error) {

      res.send(error);

    } else if (user) {

      
      await bcryptjs

        .compare(password, user.password)

        .then((password) => {

          if (password) {

            return res.json({ message: "user successfully loggedin", data: user });

            
          } else {

            res.send({ error: "Invalid User" });

          }
        })
        .catch((err) => {

          res.send(err);

        });
    } else {

      res.json({ error: "Invalid User" });

      console.log("invalid")
      
    }
  });
};

module.exports = LoginController;