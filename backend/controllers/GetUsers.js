// Schemas
const UserModel = require("../models/Signup");

const GetUsers = async (req, res) => {
 
  try{
    const UserModels = await UserModel.find({}).sort({
        created_on: "-1",
    });

    res.send(UserModels);

} catch (err) {

    res.json({"ERROR": "Users Not Found"});

}

};

module.exports = GetUsers;


