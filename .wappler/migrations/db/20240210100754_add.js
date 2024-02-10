
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.string('hlsvideolink');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('hlsvideolink');
    })
};
