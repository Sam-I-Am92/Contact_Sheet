const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./Routers/router.js');
const postContact = require('./Controllers/contact.js');
const admin = require('./Controllers/admin');
const mongoose = require('mongoose');

require('dotenv').config();

// initialise express
const app = express();

// create connection to db
// mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

// set connection var & define cb for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB Connection Failed!'));
db.once('open', () => {
  console.log('Connected to DB!');
});

// set port var
const PORT = process.env.port || 3000;

// allow cross-origin requests
app.use(cors());

// use body parser to add body property to req obj
app.use(bodyParser.json());

// serve static files to browser
app.use(express.static(path.join(__dirname, '../client/dist/')));

// route all reqs for data to router file
app.use('/status', router);

// route all reqs to /contact to contact file
app.use('/contact', postContact);

app.use('/admin', admin);

// launch server and listen on specified port
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});