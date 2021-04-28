const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Classes = require("./classes-model");

router.get('/', (req, res, next) => {
  Classes.getAllClasses()
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {

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
