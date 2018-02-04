
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('default_lists', function(table){
    table.increments('id');
    table.string('cuisine').notNullable();
    table.specificType('wine_ids', 'integer[]')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('default_lists');
};
