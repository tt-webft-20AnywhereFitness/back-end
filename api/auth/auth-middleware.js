const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/secrets');
const User = require('../users/users-model');

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        res.status(401).json({
            message: 'Token required'
        });
    }else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                res.status(401).json({
                    message: 'Token invalid'
                });
            }else {
                req.decodedJWT = decoded;
                next();
            }
        });
    }
};

const only = role_name => (req, res, next) => {

}

const checkUsernameExists = (req, res, next) => {

}

const validateRoleName = (req, res, next) => {

}

module.exports = {
    restricted,
    only,
    checkUsernameExists,
    validateRoleName
}
