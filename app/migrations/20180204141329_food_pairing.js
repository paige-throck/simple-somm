
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('menu_table', function(table){
      table.integer('user_id').references('users.id').onDelete('cascade');
      table.integer('pairing_id').references('food_pairings.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('menu_table');
};
