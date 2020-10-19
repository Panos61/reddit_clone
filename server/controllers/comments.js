const pool = require('../db');
const controller = require('express').Router();
const authorization = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const commentValidation = require('../middleware/commentValidation');
require('dotenv').config();

// CREATE COMMENTS
controller.post(
  '/comments/submit',
  authorization,
  commentValidation,
  async (req, res) => {
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
        'INSERT INTO comments (comment, submitted_at, post_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [
          req.body.comment,
          new Date().toISOString(),
          req.body.post_id,
          payload.user,
        ]
      );

      res.status(201).json({
        status: 'success',
        comments: results.rows[0],
      });
    } catch (error) {
      console.log(error);
      res.status(500).json('Server Error');
    }
  }
);

// FETCH COMMENTS BASED ON POST ID
controller.get('/comments/:id', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT comment, submitted_at, user_name, comment_id, post_id, users.user_id FROM comments INNER JOIN users ON comments.user_id = users.user_id WHERE comments.post_id = $1',
      [req.params.id]
    );

    res.status(200).json({
      status: 'success',
      comments: results.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error!');
  }
});

// FETCH NUMBER OF COMMENTS IN ONE POST
controller.get('/comments/:id', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT COUNT (comment) FROM comments INNER JOIN posts ON comments.post_id = posts.post_id WHERE comments.post_id = $1',
      [req.params.id]
    );

    res.status(200).json({
      status: 'success',
      comments: results.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error!');
  }
});

module.exports = controller;
