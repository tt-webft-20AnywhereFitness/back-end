const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Classes = require("./classes-model");
const JWT_SECRET = require('../secrets/secrets');
const mw = require('./classes-middleware');

// CRUD:  CREATE
router.post('/', (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    Classes.create(req.body)
      .then(() => {
        res.json(req.body);
      })
      .catch(next);
  });
});


// CRUD:  READ
router.get('/', (req, res, next) => {
  Classes.getAllClasses()
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch(next);
});

// CRUD:  UPDATE
router.put('/:classes_id', mw.validateInstrutorsId, (req, res) => {
  const changes = req.body;
  const { id } = req.params
  Classes.update(id, changes)
    .then((updatedClasses) => {
      if (updatedClasses) {
        res.status(200).json(updatedClasses);
      } else {
        res.status(404).json({ message: 'The class could not be found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

// CRUD:  DELETE
router.delete('/:classes_id', mw.validateInstrutorsId, (req, res) => {
  Classes.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Class deleted" })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error deleting the class' });
    });
});

module.exports = router;
