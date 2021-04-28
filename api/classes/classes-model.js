const db = require('../data/db-config');

function getAllClasses() {
    return db('classes');
}

// function getClassesByType(type) {
//     return db('classes').where({ type });
// }

module.exports = {
    getAllClasses,
    // getClassesByType
};
