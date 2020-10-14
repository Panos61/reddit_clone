const pool = require('../db');
const controller = require('express').Router();
const authorization = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const e = require('express');
const subValidation = require('../middleware/subValidation');
require('dotenv').config();

// Create Subreddit
controller.post(
  '/subreddits/create',
  subValidation,
  authorization,
  async (req, res) => {
    try {
      // Check for any token, if there is no token, then return 403 unauthorized
      const jwtToken = req.header('token');
      console.log(jwtToken);
      if (!jwtToken) {
        return res.status(403).json('Not Authorized');
      }

      // Verify token
      const payload = jwt.verify(jwtToken, process.env.jwtSecret);

      // Assign logged-in user as the administrator/creator of the subreddit
      req.user = payload.user;

      // Destructure values
      const { name, topic, description } = req.body;

      // Query  => Create the subreddit
      const results = await pool.query(
        'INSERT INTO subreddits (subreddit_name, subreddit_topic, subreddit_desc, created_at, admin_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, topic, description, new Date().toISOString(), payload.user]
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
  }
);

// Get a list of subreddits
controller.get('/subreddits', async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM subreddits');

    res.status(200).json({
      status: 'success',
      subreddits: results.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

// Get all subreddit info within a post link
controller.get('/subreddits/info', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT subreddit_name, subreddit_topic, subreddit_desc, subreddits.created_at FROM subreddits INNER JOIN posts ON subreddits.subreddit_id = posts.subreddit_id WHERE posts.post_id = $1',
      [req.params.id]
    );

    res.status(200).json({
      status: 'success',
      subreddit: results.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

// Get all subreddit info within the subreddit link
controller.get('/subreddits/r/:id', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM subreddits INNER JOIN users ON subreddits.admin_id = users.user_id WHERE subreddits.subreddit_id = $1',
      [req.params.id]
    );

    res.status(200).json({
      status: 'success',
      subreddit: results.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

// Join a subreddit
controller.post('/subreddits/r/:id/joined', async (req, res) => {
  try {
    // Check for any token, if there is no token, then return 403 unauthorized
    const jwtToken = req.header('token');
    console.log(jwtToken);
    if (!jwtToken) {
      return res.status(403).json('Not Authorized');
    }

    // Verify token
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    // Assign logged-in user as the administrator/creator of the subreddit
    req.user = payload.user;

    //const sub = 'ff64190f-c293-4549-9d8c-be96c9563915';

    const results = await pool.query(
      'INSERT INTO join_subreddit (user_id, subreddit_id, joined_at) VALUES ($1, $2, $3) RETURNING *',
      [payload.user, req.params.id, new Date().toISOString()]
    );

    res.status(200).json({
      status: 'success',
      subreddit: results.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

module.exports = controller;
