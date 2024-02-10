
exports.up = function(knex) {
  return knex.schema
    .createTable('user_role', async function (table) {
      table.increments('userrole_id');
      table.string('role');
      table.integer('user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user_role')
};
