require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
// CORS
app.use(cors());
// Dev Tool Middleware
app.use(morgan('dev'));

// Auth Middleware
app.use('/auth', require('./routes/jwtAuth'));
// Controllers Middleware
app.use('/api/v1', require('./controllers/posts'));
app.use('/api/v1', require('./controllers/subreddit'));

// init server
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});
