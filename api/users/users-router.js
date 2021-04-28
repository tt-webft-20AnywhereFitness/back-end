const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./users-model');
const mw = require('./users-middleware');

router.get('/', (req, res, next) => {
  User.getAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});
router.get('/:id', mw.validateUserId, (req, res, next) => {
  console.log('working');
  res.status(200).json(req.user);
});

router.post('/:id', (req, res, next) => {
  const { client_id } = req.body;
  User.signUp(parseInt(req.params.id, 10), client_id)
    .then((regs) => {
      res.json(regs);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {});

router.delete('/:id', (req, res, next) => { });

module.exports = router;
