const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./users/users-router');
const instructorsRouter = require('./instructors/instructors-router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/instructors', instructorsRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
