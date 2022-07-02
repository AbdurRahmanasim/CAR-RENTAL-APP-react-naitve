// Schemas
const paymentModel = require('../models/Payment');

const paymentController = async (req, res) => {
    
  const {card, cardno, expirydate,} = req.body;

  if (
    !card ||
    !cardno ||
    !expirydate  
  ) {
    return res.json({message: 'Required fields are missing.'});
  }


  const userObj = {
    ...req.body,
  };

  paymentModel.create(userObj, (err, data) => {
    if (err) {
        res.send(err);
    } else {
        res.send(data)
    }
 });
};

module.exports = paymentController;
