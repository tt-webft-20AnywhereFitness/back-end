const db = require('../data/db-config');

function getAllClasses() {
  return db('classes');
}

function findInstructor() {

}
// function getClassesByType(type) {
//     return db('classes').where({ type });
// }

function create(post) {
  return db('classes')
    .insert(post);
}

module.exports = {
  getAllClasses,
  // getClassesByType
  create,
};
