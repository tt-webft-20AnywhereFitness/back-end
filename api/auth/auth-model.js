/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
const db = require("../data/db-config");

function getBy(filter) {
  return db("users").where(filter).first();
}

const getById = (user_id) => {
  if (typeof user_id !== "number") {
    user_id = parseInt(user_id);
  }
  return db("users").where({ user_id }).first();
};

function addUser(userInfo) {
  return db("users")
    .insert(userInfo)
    .returning("user_id")
    .then((user_id) => {
      return getById(user_id[0]);
    });
}

module.exports = {
  getBy,
  addUser,
};
