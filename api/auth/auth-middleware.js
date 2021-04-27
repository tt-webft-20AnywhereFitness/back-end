const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/secrets');
const Auth = require('./auth-model');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: 'Token required',
    });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: 'Token invalid',
        });
      } else {
        req.decodedJWT = decoded;
        next();
      }
    });
  }
};

const only = (role_name) => (req, res, next) => {
  next();
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const users = await Auth.getBy({ username: req.body.username });
    if (!users.length) {
      next();
    } else {
      next({ status: 422, message: 'Username already exists.  Please create a different Username.' });
    }
  } catch (err) {
    next(err);
  };
};

const checkEmailExists = async (req, res, next) => {
  try {
    const users = await Auth.getBy({ email: req.body.username });
    if (!users.length) {
      next();
    } else {
      next({ status: 422, message: 'Email already in use.  Please sign up with a different email address.' });
    }
  } catch (err) {
    next(err);
  };
};

const validateRoleName = (req, res, next) => {
  next();
};

module.exports = {
  restricted,
  only,
  checkUsernameExists,
  checkEmailExists,
  validateRoleName,
};
