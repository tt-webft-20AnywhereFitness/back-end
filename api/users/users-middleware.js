const bcrypt = require('bcryptjs');
const Users = require('./users-model');

// Here will be all our middleware for validating users

function validateNewUser(req, res, next) {
  next();
}

function validatePassword(req, res, next) {
  next();
}

module.exports = {
  validateNewUser,
  validatePassword,
};
