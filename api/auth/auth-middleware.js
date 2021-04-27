/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../secrets/secrets");
const Auth = require("./auth-model");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: "Token required",
    });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "Token invalid",
        });
      } else {
        req.decodedJWT = decoded;
        next();
      }
    });
  }
};

const only = (role_name) => (req, res, next) => {
  if (role_name === req.decodedToken.role_name) {
    next();
  } else {
    next({ status: 403, message: "This is not for you" });
  }
  next();
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const users = await Auth.getBy({ username: req.body.username });
    if (!users) {
      next();
    } else {
      next({
        status: 422,
        message:
          "Username already exists.  Please create a different Username.",
      });
    }
  } catch (err) {
    next(err);
  }
};

const checkEmailExists = async (req, res, next) => {
  try {
    const users = await Auth.getBy({ email: req.body.username });
    if (!users) {
      next();
    } else {
      next({
        status: 422,
        message:
          "Email already in use.  Please sign up with a different email address.",
      });
    }
  } catch (err) {
    next(err);
  }
};

async function validateCredentials(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    next({ status: 400, message: "username and password required" });
  } else {
    const databaseUser = await Auth.getBy({ username: req.body.username });
    if (
      databaseUser &&
      bcrypt.compareSync(req.body.password, databaseUser.password)
    ) {
      req.body.user_id = databaseUser.user_id;
      next();
    } else {
      next({ message: "invalid credentials" });
    }
  }
}

module.exports = {
  restricted,
  only,
  checkUsernameExists,
  checkEmailExists,
  validateCredentials,
};
