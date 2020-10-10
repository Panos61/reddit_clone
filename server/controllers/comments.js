const pool = require('../db');
const controller = require('express').Router();
const authorization = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const { param } = require('./posts');
const commentValidation = require('../middleware/commentValidation');
require('dotenv').config();

// CREATE COMMENT
controller.post(
  '/comments/submit/:id',
  authorization,
  commentValidation,
  async (req, res) => {
    try {
      // Destructure body
      const { comment } = req.body;

      // Check for existing token
      // If token, then assign user as the comment author
      const jwtToken = req.header('token');
      // If no token, return 403.
      if (!jwtToken) {
        return res.status(403).json('Not Authorized.');
      }

      // Verify token
      const payload = jwt.verify(jwtToken, process.env.jwtSecret);

      // Assign logged-in user as the owner of the post
      req.user = payload.user;

      const results = await pool.query(
        'INSERT INTO post_comments (comment, created_at, user_id, post_id) VALUES ($1, $2, $3, $4)',
        [comment, new Date().toISOString(), payload.user, req.params.id]
      );

      res.status(201).json({
        status: 'success',
        comment: results.rows[0],
      });
    } catch (error) {
      console.log(error);
      res.status(500).json('Server Error!');
    }
  }
);

// FETCH COMMENTS BASED ON POST ID
controller.get('/comments/:id', async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM post_comments WHERE post_id = $1',
      [req.params.id]
    );
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error!');
  }
});

module.exports = controller;
