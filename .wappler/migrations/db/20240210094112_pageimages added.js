
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_pageimages', async function (table) {
      table.increments('pageimages_id');
      table.string('imagelink');
      table.integer('creator_id');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.boolean('imageflagged');
      table.datetime('imageflagdate');
      table.boolean('imageoffline');
      table.integer('imagereviewer');
      table.datetime('reviewdate');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_pageimages')
};
