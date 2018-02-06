exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wines').del()
    .then(function () {
      // Inserts seed entries

      return knex('wines').insert([

      ]);
    });
};
