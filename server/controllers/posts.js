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
      'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
      [req.body.title, req.body.content, payload.user]
    );

    res.status(201).json({
      status: 'success',
      data: {
        post: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

// FETCH ALL POSTS
controller.get('/feed', async (req, res) => {
  let user_id = 'd5fc796e-77d3-4634-88d5-85d690f2601b';
  try {
    const results = await pool.query(
      'SELECT * FROM posts FULL OUTER JOIN  users ON posts.user_id = users.user_id WHERE users.user_id = $1',
      [user_id]
    );

    res.status(200).json({
      status: 'success',
      posts: results.rows,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = controller;
