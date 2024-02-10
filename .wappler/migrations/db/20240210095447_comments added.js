
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_pagecomments', async function (table) {
      table.increments('id');
      table.text('comment');
      table.datetime('commentdate');
      table.integer('user_id');
      table.boolean('commentflagged');
      table.integer('commentflagger');
      table.datetime('commentflagdate');
      table.string('commentflagreason', 1);
      table.integer('reviewer');
      table.datetime('reviewdate');
      table.text('reviewnotes');
      table.boolean('commentoffline');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.renameColumn('imagereviewer', 'reviewer');
      table.string('imageflagreason', 1);
    })
    .table('pagecontent_pagevideos', async function (table) {
      table.string('videoflagreason', 1);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('videoflagreason');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.renameColumn('reviewer', 'imagereviewer');
      table.dropColumn('imageflagreason');
    })
    .dropTable('pagecontent_pagecomments')
};
