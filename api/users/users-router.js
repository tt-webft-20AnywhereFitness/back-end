const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./users-model');
const { validateNewUser, validatePassword } = require('./users-middleware');

router.get('/', (req, res, next) => {
  User.getAll()
    .then((users) => {
      console.log(`here are your users: ${users}`);
      res.status(200).json(users);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {

});

router.post('/', (req, res, next) => {

});

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {

});

module.exports = router;
