const pool = require('../db');
const controller = require('express').Router();
const authorization = require('../middleware/auth');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Create Subreddit
controller.post('/subreddits/create', authorization, async (req, res) => {
  try {
    // Check for any token, if there is no token, then return 403 unauthorized
    const jwtToken = req.header('token');
    console.log(jwtToken);
    if (!jwtToken) {
      return res.status(403).json('Not Authorized');
    }

    // Verify token
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    // Assign logged-in user as the owner of the post
    req.user = payload.user;

    // Destructure values
    const { name, topic, description } = req.body;

    // Query
    const results = await pool.query(
      'INSERT INTO subreddits (subreddit_name, subreddit_topic, subreddit_desc, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, topic, description, payload.user]
    );

    // if no errors
    res.status(201).json({
      status: 'success',
      data: {
        subreddit: results.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json('Server Error');
    console.error(error);
  }
});

// Get a list of subreddits
controller.get('/subreddits', async (req, res) => {
  try {
    const results = await pool.query('SELECT subreddit_name FROM subreddits');

    res.status(200).json({
      status: 'success',
      subreddits: results.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

// Get My Subreddits
// controller.get('/my-subreddits', authorization, async (req, res) => {
//   try {

//    } catch (error) {
//     console.log(error);
//     res.status(500).json('Server Error');
//   }
// });

module.exports = controller;
