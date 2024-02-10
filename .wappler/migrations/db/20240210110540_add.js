
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.decimal('pageorder');
      table.decimal('homepageorder');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.dropColumn('pageorder');
      table.dropColumn('homepageorder');
    })
};
