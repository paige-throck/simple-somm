
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('wine_lists', function(table){
    table.increments('id').notNullable();
    table.integer('user_id').references('users.id').onDelete('cascade');
    table.specificType('wine_ids', 'integer[]')
    table.timestamp('date').defaultTo(knex.fn.now());
  })
  .then(function(){
    return knex.schema.createTableIfNotExists('food_pairings', function(table){
      table.increments('id').notNullable();
      table.integer('cuisine_id').references('cuisine_lists.id').onDelete('cascade');
      table.string('food');
      table.integer('wine_id').references('wines.id').onDelete('cascade');
    })
  })
  .then(function(){
    return knex.schema.createTableIfNotExists('menu_pairings', function(table){
      table.integer('user_id').references('users.id').onDelete('cascade');
      table.integer('pairing_id').references('food_pairings.id').onDelete('cascade');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wine_lists')
  .then(function(){
    return knex.schema.dropTableIfExists('food_pairings')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('menu_pairings')
  })
};
