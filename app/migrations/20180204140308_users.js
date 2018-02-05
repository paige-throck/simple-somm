
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.integer('cuisine_id').references('cuisine_lists.id').onDelete('cascade');
      table.string('city');
      table.string('state');
      table.string('address');
      table.integer('zipcode');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
