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

module.exports = {
  getAllClasses,
  create,
};
