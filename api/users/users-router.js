const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/secrets');
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
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    const client_id = decoded.subject;
    User.signUp(parseInt(req.params.id, 10), client_id)
      .then((regs) => {
        res.json(regs);
      })
      .catch(next);
  });
});

router.delete('/:id', (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    const client_id = decoded.subject;
    console.log(client_id);
    User.cancelClass(parseInt(req.params.id, 10), client_id)
      .then((regs) => {
        res.json(regs);
      })
      .catch(next);
  });
});

module.exports = router;
