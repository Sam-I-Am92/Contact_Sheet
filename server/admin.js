// import mongoose
const mongoose = require('mongoose');

// create connection to database
const db = mongoose.connection;

const getContacts = (req, res, next) => {
  db.collection('contacts').find().toArray((err, result) => {
    if (err) {
      return res.status(404).send(err);
    } else {
      return res.status(200).send(result);
    }
  });
};

module.exports = getContacts;