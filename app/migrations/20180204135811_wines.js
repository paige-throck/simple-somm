
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('wines', function(table){
    table.increments('id');
    table.string('name');
    table.string('varietal');
    table.string('origin');
    table.text('description');
    table.float('price_retail');
    table.integer('vintage');
    table.string('color');
    table.string('still_sparkling');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wines');
};
