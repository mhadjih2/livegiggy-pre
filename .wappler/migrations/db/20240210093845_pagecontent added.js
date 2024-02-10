
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent', async function (table) {
      table.increments('pagecontent_id');
      table.string('pagetitle');
      table.text('pagedescription');
      table.boolean('contentonline');
      table.boolean('contentprivate');
      table.datetime('pagedatecreated');
      table.datetime('pageediteddate');
      table.integer('pageeditor');
      table.decimal('pagecreator');
      table.string('pagetype', 1);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent')
};
