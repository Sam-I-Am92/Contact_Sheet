const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./Routers/router.js');
const saveContact = require('./Controllers/contact.js');
const admin = require('./Controllers/admin');
const mongoose = require('mongoose');

require('dotenv').config();

// initialise express
const app = express();

// create connection to db
// mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

// set mongoose promises to native promises
mongoose.Promise = global.Promise;
// set connection var & define cb for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB Connection Failed!'));
db.once('open', () => {
  console.log('Connected to DB!');
});

// allow cross-origin requests
app.use(cors());

// use body parser to add body property to req obj
app.use(bodyParser.json());

// serve static files to browser
app.use(express.static(path.join(__dirname, '../client/dist/')));

// route all reqs for data to router file
app.use('/status', router);

// route all reqs to /contact to contact file
app.use('/contact', saveContact);

app.use('/admin', admin);

// launch server and listen on specified port
app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}!`);
});