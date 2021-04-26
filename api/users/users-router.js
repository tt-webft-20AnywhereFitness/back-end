const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./users-model');
const mw = require('./users-middleware');

router.get('/', (req, res, next) => {
  User.getAll()
    .then((users) => {
      console.log(`here are your users: ${users}`);
      res.status(200).json(users);
    })
    .catch(next);
});
router.get('/:id', mw.validateUserId, (req, res, next) => {
  console.log('working');
  res.status(200).json(req.user);
});
router.post('/', (req, res, next) => {});
router.put('/:id', (req, res, next) => {});
router.delete('/:id', (req, res, next) => {});
module.exports = router;
