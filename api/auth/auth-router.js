const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {
  checkUsernameExists,
  checkEmailExists,
  validateRoleName,
  validateCredentials
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

router.post('/login', validateCredentials, (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password))
});

router.post('logout', (req, res, next) => {

});

module.exports = router;
