// import mongoose & contact model
const mongoose = require('mongoose');
const Contact = require('../Models/contact.model');
  
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
      res.status(201).send('Contact Saved!');
    }
  });
};

const saveContact = (req, res) => {
  var promise = new Promise((resolve, reject) => {
    const contact = new Contact({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      date: Date.now()
    });
    contact.save((err, contact) => {
      if (err) {
        reject(err);
      } else {
        resolve(contact);
      }
    });
  })
    .then((contact) => {
      console.log('Contact Saved!', contact);
    })
    .then(() => {
      res.status(201).send('Contact Saved!');
    })
    .catch((err) => {
      console.log('Error!', err);
      res.status(400).send(err);
    });
};

module.exports = saveContact;