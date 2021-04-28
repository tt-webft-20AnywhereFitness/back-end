const db = require('../data/db-config');

function getAll() {
  return db('users');
}
// eslint-disable-next-line camelcase
function getById(user_id) {
  return db('users').where({ user_id }).first();
}

async function signUp(class_id, client_id) {
  console.log('class id: ', class_id);
  console.log('client id: ', client_id);
  await db('registrations').insert({
    class_id,
    client_id,
  }).returning('registration_id').then((id) => getById(id[0]));

  return db('registrations').where({ class_id });
  // const totalRegistered = await db('registrations').where('class_id', class_id).count();
}

module.exports = {
  getAll,
  getById,
  signUp,
};
