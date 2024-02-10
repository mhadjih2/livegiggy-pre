
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_pagevideos', async function (table) {
      table.increments('pagevideos_id');
      table.string('videolink');
      table.datetime('videouploaddate');
      table.integer('videocreator');
      table.boolean('videoflagged');
      table.datetime('flagdate');
      table.integer('videoflagger');
      table.integer('reviewer');
      table.datetime('reviewdate');
      table.text('reviewnotes');
      table.boolean('videooffline');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.string('coverimagelink');
      table.datetime('uploadimagedate');
      table.integer('imageflagger');
      table.text('reviewnotes');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pageimages', async function (table) {
      table.dropColumn('coverimagelink');
      table.dropColumn('uploadimagedate');
      table.dropColumn('imageflagger');
      table.dropColumn('reviewnotes');
    })
    .dropTable('pagecontent_pagevideos')
};
