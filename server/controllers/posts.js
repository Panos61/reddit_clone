const pool = require('../db');
const controller = require('express').Router();
const authorization = require('../middleware/auth');
const postValidation = require('../middleware/postValidation');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// SUBMIT POST
controller.post('/submit', authorization, postValidation, async (req, res) => {
  try {
    // Check for any token, if there is no token, then return 403 unauthorized
    const jwtToken = req.header('token');
    if (!jwtToken) {
      return res.status(403).json('Not Authorized');
    }

    // Verify token
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    // Assign logged-in user as the owner of the post
    req.user = payload.user;

    const results = await pool.query(
      'INSERT INTO posts (title, content, subreddit_name, created_at, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [
        req.body.title,
        req.body.content,
        req.body.subreddit,
        new Date().toISOString(),
        payload.user,
      ]
    );

    res.status(201).json({
      status: 'success',
      data: {
        post: results.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json('Server Error');
    console.log(error);
  }
});

// FETCH ALL POSTS
controller.get('/feed', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM posts INNER JOIN users ON posts.user_id = users.user_id'
    );

    res.status(200).json({
      status: 'success',
      posts: results.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

// FETCH A POST
controller.get('/post/:id', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM posts INNER JOIN users ON posts.user_id = users.user_id WHERE post_id = $1',
      [req.params.id]
    );

    res.status(200).json({
      status: 'success',
      post: results.rows[0],
    });
  } catch (error) {
    res.status(500).json('Server Error');
    console.log(error);
  }
});

module.exports = controller;
