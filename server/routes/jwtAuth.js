const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const validInfo = require('../middleware/validInfo');
const jwtGenerator = require('../utils/jwtGenerator');
const authorization = require('../middleware/auth');

const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register
router.post('/register', validInfo, async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if user already exists by checking for an existing email.
    // If exists, return 401 status code.
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send('User already exists!');
    }

    // Bcrypt the password.
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // Insert user entity into the DB.
    const newUser = await pool.query(
      'INSERT INTO users (user_email, user_name, user_password, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, username, bcryptPassword, new Date().toISOString()]
    );

    // Generate JWT token
    const token = jwtGenerator(newUser.rows[0].user_id);

    // Server Response
    res.status(200).json({
      //user: user.rows[0],
      token,
    });
  } catch (error) {
    res.status(500).send('Server Error!');
    console.error(error);
  }
});

router.post('/login', validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user doesn't exist.
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email,
    ]);
    // If not, throw err
    if (user.rows.length === 0) {
      return res.status(401).json('Email or Password is incorrect!');
    }

    // Check if password matches with the hashed stored password.
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    // If not, throw err
    if (!validPassword) {
      return res.status(401).json('Email or Password is incorrect!');
    }

    // Generate JWT token
    const token = jwtGenerator(user.rows[0].user_id);

    // Server Response
    res.status(200).json({
      user: user.rows[0],
      token: token,
    });
  } catch (error) {
    res.status(500).send('Server Error!');
    console.error(error);
  }
});

router.get('/is-verify', authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
});

router.get('/get-me', authorization, async (req, res) => {
  try {
    const jwtToken = req.header('token');
    if (!jwtToken) {
      return res.status(403).json('Not Authorized.');
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;

    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      req.user,
    ]);

    res.status(200).json({ user: user.rows[0] });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

router.delete('/users/:id', authorization, async (req, res) => {
  try {
    // Check for token
    const jwtToken = req.header('token');
    if (!jwtToken) {
      return res.status(403).json('Not Authorized.');
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;

    const user = await pool.query('DELETE * FROM users WHERE user_id = $1', [
      req.user,
    ]);

    res.status(200).json({ user: user.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
