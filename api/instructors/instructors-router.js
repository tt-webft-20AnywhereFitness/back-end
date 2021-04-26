const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/class', (req, res, next) => {
  console.log('Class created...');
  console.log(`Payload is: ${req.body}`);
});

router.put('/class', (req, res, next) => {
  console.log('Class updated...');
  console.log(`Payload is: ${req.body}`);
});

router.delete('/class', (req, res, next) => {
  console.log('Class deleted...');
  console.log(`Payload is: ${req.body}`);
});
