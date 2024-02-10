
exports.up = function(knex) {
  return knex.schema
    .createTable('SEO', async function (table) {
      table.increments('seo_id');
      table.string('pagename');
      table.string('description');
      table.string('keywords');
      table.string('title');
      table.string('canonical');
      table.string('robots');
      table.string('og_title');
      table.string('og_description');
      table.string('og_image');
      table.string('og_type');
      table.string('og_sitename');
      table.string('twitter_title');
      table.string('twitter_description');
      table.string('twitter_image');
      table.string('twitter_site');
      table.string('twitter_creator');
      table.string('twitter_url');
      table.string('og_url');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('SEO')
};
