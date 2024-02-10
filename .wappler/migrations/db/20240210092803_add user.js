
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.datetime('signupdate');
      table.string('validationcode', 6);
      table.datetime('validationdate');
      table.boolean('userflagged');
      table.boolean('userupforremoval');
      table.datetime('removeddate');
      table.text('removereason');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('signupdate');
      table.dropColumn('validationcode');
      table.dropColumn('validationdate');
      table.dropColumn('userflagged');
      table.dropColumn('userupforremoval');
      table.dropColumn('removeddate');
      table.dropColumn('removereason');
    })
};
