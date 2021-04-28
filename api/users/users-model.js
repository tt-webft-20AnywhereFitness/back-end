const db = require('../data/db-config');

function getAll() {
  return db('users');
}
// eslint-disable-next-line camelcase
function getById(user_id) {
  return db('users').where({ user_id }).first();
}

async function signUp(class_id, client_id) {
  await db('registrations').insert({ class_id, client_id }).returning('registration_id');

  const totalRegistered = await db('registrations').where({ class_id }).count().first();

  await db('classes').where({ class_id }).update({
    registered_clients: totalRegistered.count,
  });

  return db('classes').where({ class_id }).select('class_id', 'class_name', 'registered_clients');
}

async function cancelClass(class_id, client_id) {
  await db('registrations').where({ class_id, client_id }).del();

  const totalRegistered = await db('registrations').where({ class_id }).count().first();

  await db('classes').where({ class_id }).update({
    registered_clients: totalRegistered.count,
  });

  return db('classes').where({ class_id }).select('class_id', 'class_name', 'registered_clients');
}

module.exports = {
  getAll,
  getById,
  signUp,
  cancelClass,
};
