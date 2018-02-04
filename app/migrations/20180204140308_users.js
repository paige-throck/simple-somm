
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('cuisine').notNullable();
      table.string('city');
      table.string('state');
      table.string('address');
      table.integer('zipcode');
      table.integer('default_id').references('default_lists.id').onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
