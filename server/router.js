// import express & express.router
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// const controller = require('./controller');
const contact = require('./contact');

// test timelog function sends back time string
var timeLog = (req, res) => {
  var time = `${Date.now()}`;
  res.status(200).send(time);
};

// test get req to api route
router.get('/', (req, res) => {
  res.status(200).send('Api is working!');
});

// test get req for time
router.get('/time', timeLog);

// export router
module.exports = router;