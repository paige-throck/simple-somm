
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('food_pairing', function(table){
      table.integer('wine_id').references('wines.id').onDelete('cascade');
      table.integer('menu_id').references('menu_table.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('food_pairing');
};
