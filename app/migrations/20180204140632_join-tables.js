
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('wine_lists', function(table){
    table.increments('id');
    table.integer('user_id').references('users.id').onDelete('cascade');
    table.specificType('wine_ids', 'integer[]')
    table.timestamp('date').defaultTo(knex.fn.now());
  })
  .then(function(){
    return knex.schema.createTableIfNotExists('menu_table', function(table){
      table.increments('id');
      table.string('item');
      table.integer('user_id').references('users.id').onDelete('cascade');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wine_lists')
  .then(function(){
    return knex.schema.dropTableIfExists('food_pairing')
  })
};
