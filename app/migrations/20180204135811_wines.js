
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('wines', function(table){
    table.increments('id');
    table.integer('wine_com_id');
    table.string('name');
    table.string('varietal');
    table.string('description');
    table.float('price_retail');
    table.string('url');
    table.integer('vintage');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wines');
};
