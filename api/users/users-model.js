const db = require('../data/db-config');

function getAll() {
  return db('users');
}

function getById(user_id)

module.exports = {
  getAll,

};
