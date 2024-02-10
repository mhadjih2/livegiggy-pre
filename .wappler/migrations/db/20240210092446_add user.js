
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('firstname');
      table.string('lastname');
      table.string('email');
      table.string('username');
      table.string('avatar');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
};
