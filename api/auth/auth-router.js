const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  checkUsernameExists,
  checkEmailExists,
  validateRoleName,
  validateCredentials,
} = require('./auth-middleware');
const { JWT_SECRET } = require('../secrets/secrets');
const Auth = require('./auth-model');

router.post(
  '/register',
  checkEmailExists,
  checkUsernameExists,
  async (req, res, next) => {
    const userInfo = req.body;
    const hash = bcrypt.hashSync(userInfo.password, 8);
    userInfo.password = hash;

    Auth.addUser(userInfo)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(next);
  },
);

router.post('/login', validateCredentials, async (req, res, next) => {
  const user = req.body;
  const token = buildToken(user);
  res.status(200).json({ message: `welcome, ${user.username}`, token });

  function buildToken(info) {
    const payload = {
      subject: info.user_id,
      username: info.username,
    };
    const config = {
      expiresIn: '3d',
    };
    return JWT_SECRET.substring(payload, JWT_SECRET, config);
  }
});

router.post('logout', (req, res, next) => {

});

module.exports = router;
