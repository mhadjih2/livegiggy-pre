
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_reactions', async function (table) {
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_reactions')
};
