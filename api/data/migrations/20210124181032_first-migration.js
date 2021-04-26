// We will have four tables
// USERS TABLE -- user_id, username, password, role_id, remaining_classes
// CLASSES TABLE -- class_id, class_name, type, startTime (possible integer?)
// duration (integer), intensity, location, registered_clients, size
// ROLES TABLE - role_id, role_name
// REGISTRATIONS TABLE - registration_id, class_id,
// user_id(can be named client_id but it will be a foreign key referencing)

exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('user_username', 200).notNullable();
      users.string('user_password', 200).notNullable();
      users.string('user_email', 320).notNullable();
      users.timestamps(false, true);
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
};
