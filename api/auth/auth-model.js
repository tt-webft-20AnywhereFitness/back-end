const db = require('../data/db-config');

function getBy(filter) {
  return db('users').where(filter).first();
}

async function addUser(userInfo) {
  const newUser = await db('users').insert(userInfo)
    .then(([id]) => db('users').where({ id }).first());
  return newUser;
}

module.exports = {
  getBy,
  addUser,
};
