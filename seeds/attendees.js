
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {meeting_id: 1, user_id: 1},
        {meeting_id: 1, user_id: 2},
        {meeting_id: 1, user_id: 3},
        {meeting_id: 1, user_id: 4},
        {meeting_id: 2, user_id: 1},
        {meeting_id: 2, user_id: 3},
        {meeting_id: 2, user_id: 4},
        {meeting_id: 3, user_id: 2},
        {meeting_id: 3, user_id: 3},
        {meeting_id: 3, user_id: 4},
        {meeting_id: 3, user_id: 5},
        {meeting_id: 4, user_id: 1},
        {meeting_id: 4, user_id: 5},
        {meeting_id: 5, user_id: 5},
        {meeting_id: 5, user_id: 4},
        {meeting_id: 5, user_id: 3},
        {meeting_id: 6, user_id: 1},
        {meeting_id: 6, user_id: 3},
        {meeting_id: 6, user_id: 4},
        {meeting_id: 7, user_id: 1},
        {meeting_id: 7, user_id: 2},
        {meeting_id: 8, user_id: 1},
        {meeting_id: 8, user_id: 2},
        {meeting_id: 8, user_id: 3},
        {meeting_id: 8, user_id: 4},
        {meeting_id: 8, user_id: 5},
        {meeting_id: 9, user_id: 1},
        {meeting_id: 9, user_id: 2},
        {meeting_id: 9, user_id: 3},
        {meeting_id: 10, user_id: 2},
        {meeting_id: 10, user_id: 4},
        {meeting_id: 10, user_id: 3},
      ]);
    });
};
