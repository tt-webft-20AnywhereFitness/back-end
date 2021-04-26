const router = require('express').Router();
const {  } = require('./auth-middleware');
const { JWT_SECRET } = require('../secrets/secrets');

router.post('/register', (req, res, next) => {

});

router.post('/login', (req, res, next) => {

});

router.post('logout', (req, res, next) => {

});

module.exports = router;
