const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateNewUser, validatePassword } = require('./users-middleware');

router.post('/register', (req, res, next) => {
  console.log('User created...');
  console.log(`Payload is: ${req.body}`);
});

router.post('/login', (req, res, next) => {
  console.log('User logged in...');
  console.log(`Payload is: ${req.body}`);
});

module.exports = router;
