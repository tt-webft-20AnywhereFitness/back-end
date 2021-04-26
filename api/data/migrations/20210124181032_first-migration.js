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
      users.string('username', 200).notNullable();
      users.string('password', 200).notNullable();
      users.string('email', 320).notNullable();
      users.integer('remaining_classes', 128).notNullable();
      users.integer('role_id', 200).notNullable()
        .unsigned()
        .references('role_id')
        .inTable('roles');
    })
    .createTable('classes', (table) => {
      table.increments('classes');
      table.string('class_id', 200).notNullable();
      table.string('class_name', 200).notNullable();
      table.string('type', 200).notNullable();
      table.string('startTime', 200).notNullable();
      table.integer('duration', 200).notNullable().unsigned();
      table.integer('intensity', 200).notNullable().unsigned();
      table.string('location', 200).notNullable();
      table.string('registered_clients', 200).notNullable().unsigned();
      table.string('size', 200).notNullable().unsigned();
    })
    .createTable('roles', (table) => {
      table.increments('roles');
      table.string('role_id', 200).notNullable();
    })
    .createTable('registrations', (table) => {
      table.increments('registrations');
      table.string('registration_id', 200).notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
};
