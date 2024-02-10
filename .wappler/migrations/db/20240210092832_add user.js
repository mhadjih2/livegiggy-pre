
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.integer('removedby');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('removedby');
    })
};
