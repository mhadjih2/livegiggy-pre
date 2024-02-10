
exports.up = function(knex) {
  return knex.schema
    .createTable('authorized_roles', async function (table) {
      table.increments('authrole_id');
      table.string('role', 1);
      table.string('roledescription');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authorized_roles')
};
