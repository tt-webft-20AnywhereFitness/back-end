const db = require('../data/db-config');

function getAll() {
  return db('users');
}
// eslint-disable-next-line camelcase
function getById(user_id) {
  return db('users').where({ user_id }).first();
}
module.exports = {
  getAll,
  getById,
};
