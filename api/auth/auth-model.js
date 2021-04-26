const db = require('../data/db-config');

function getBy(filter) {
    return db('users').where(filter);
}

module.exports = {
    getBy,
};
