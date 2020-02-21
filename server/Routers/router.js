// import express & express.router
const express = require('express');
const router = express.Router();

// test timelog function sends back time string
var timeLog = (req, res) => {
  var time = `${Date.now()}`;
  res.status(200).send(time);
};

// test get req for time
router.get('/time', timeLog);

// export router
module.exports = router;