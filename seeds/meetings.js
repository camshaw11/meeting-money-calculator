
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, meeting_name: '', duration: '', attendees: '', cost: '', created_at: , updated_at: , notes: '', max_duration: , max_cost:},
        
      ]);
    });
};
