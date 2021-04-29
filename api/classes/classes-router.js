const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Classes = require("./classes-model");
const JWT_SECRET = require('../secrets/secrets');
const mw = require('./classes-middleware');

router.get('/', (req, res, next) => {
  Classes.getAllClasses()
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
  const instructor_id = decoded.subject;
  Classes.create(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch(next);
  });
});

router.put('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

// router.get("/", (req, res, next) => {
//     Classes.getClassesByType()
//     .then((type) => {
//         res.status(200).json(type);
//     })
//     .catch(next);
// })

module.exports = router;
