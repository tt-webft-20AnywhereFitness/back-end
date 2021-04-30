const db = require('../data/db-config');

// GENERAL SEARCH
function getAllClasses() {
  return db('classes');
}

// INSERTING NEW CLASS TO DATABASE
function create(post) {
  return db('classes')
    .insert(post);
}

function findInstructor(instructor_id) {
  return db('classes')
    .where('instructor_id', '=', '2');
}

function update(id, changes) {
  return db('classes')
    .where({ id })
    .update(changes);
}

module.exports = {
  getAllClasses,
  create,
  findInstructor,
  update
};
