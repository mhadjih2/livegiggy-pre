
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.string('channelname');
    })
    .createTable('user_mistserver', async function (table) {
      table.increments('mistserver_id');
      table.string('mistusername');
      table.string('mistauth');
      table.string('channelname');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('user_channels', async function (table) {
      table.increments('channel_id');
      table.string('channelname');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.string('channelname');
    })
    .table('pagecontent_pagevideos', async function (table) {
      table.string('channelname');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('channelname');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.dropColumn('channelname');
    })
    .dropTable('user_channels')
    .dropTable('user_mistserver')
    .table('pagecontent', async function (table) {
      table.dropColumn('channelname');
    })
};
