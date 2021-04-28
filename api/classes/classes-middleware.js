const bcrypt = require('bcryptjs');
const Class = require('./classes-model');

function validateClassBody(req, res, next) {
  const {
    class_name,
    type,
    startTime,
    duration,
    intensity,
    location,
    size,
  } = req.body;

  if (!req.body) {
    res.status(401).json({
      message: 'field required',
    });
  } else if (
    !class_name
    || !type
    || !startTime
    || !duration
    || !intensity
    || !location
    || !size
  ) {
    res.status(400).json({
      message: 'Missing required class name, type, start time, duration, intensity, location or size.',
    });
  } else {
    next();
  }
}

function validateInstrutorsId(req, res, next) {
  const { id } = req.params;
  Class.findInstructor(id)
    .then((data) => {
      if (data === 2) {
        res.id = data;
        next();
      } else {
        res.status(404).json({
          message: 'Invalid instructor ID',
        });
      }
    })
    .catch((err) => {
      next({
        status: 500, message: err.message,
      });
    });
}

module.exports = {
  validateClassBody,
  validateInstrutorsId,
};
