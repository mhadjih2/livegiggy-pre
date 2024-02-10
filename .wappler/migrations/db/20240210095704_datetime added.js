
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_reactions', async function (table) {
      table.datetime('reactiondate');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_reactions', async function (table) {
      table.dropColumn('reactiondate');
    })
};
