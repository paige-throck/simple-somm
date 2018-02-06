exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cuisine_lists').del()
    .then(function () {
      // Inserts seed entries

      return knex('cuisine_lists').insert([
        {
          cuisine: "French", wine_ids: [1,2,3,4,5,6,7,8,9,10]
        },
        {
          cuisine: "Italian", wine_ids: [22,23,24,25,26,27,28,29,30,31]
        }

      ]);
    });
};
