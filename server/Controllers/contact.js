// import mongoose & contact model
const mongoose = require('mongoose');
const Contact = require('../../database/index');
  
const postContact = (req, res) => {
  // post all contact info to db
  // console.log('firstName: ', req.body.firstName);
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    date: Date.now()
  });
  contact.save((err, contact) => {
    if (err) {
      return console.error(err);
    } else {
      console.log('Contact Saved!', contact);
    }
  });
  res.status(201).send('Contact Saved!');
};
  
module.exports = postContact;