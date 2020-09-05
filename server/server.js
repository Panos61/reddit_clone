require('dotenv').config();
const db = require('./db');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
// CORS
app.use(cors());
// Dev Tool Middleware
app.use(morgan('dev'));

// routes

// init server
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});
