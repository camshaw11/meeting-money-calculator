
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'TheBoss', hash: '$argon2id$v=19$m=65536,t=2,p=1$DSEx0cYn8hmQro0nGLBgfw$+FAfVfETArtkfvOoaQP/SG0HFqJb3hRTHdd6JzwDnU4', first_name: 'Boss', last_name: 'Scrooge', hourly_wage: 300, created_at: '2020-01-01 10:00:00', updated_at: '2020-01-01 10:00:00'},
        {id: 2, username: 'TheJunior', hash: '$argon2id$v=19$m=65536,t=2,p=1$DSEx0cYn8hmQro0nGLBgfw$+FAfVfETArtkfvOoaQP/SG0HFqJb3hRTHdd6JzwDnU4', first_name: 'Leeroy', last_name: 'Jenkins', hourly_wage: 20, created_at: '2020-01-01 10:00:00', updated_at: '2020-01-01 10:00:00'},
        {id: 3, username: 'TheSenior', hash: '$argon2id$v=19$m=65536,t=2,p=1$DSEx0cYn8hmQro0nGLBgfw$+FAfVfETArtkfvOoaQP/SG0HFqJb3hRTHdd6JzwDnU4', first_name: 'Sirious', last_name: 'Ego', hourly_wage: 160, created_at: '2020-01-01 10:00:00', updated_at: '2020-01-01 10:00:00'},
        {id: 4, username: 'TheReceptionist', hash: '$argon2id$v=19$m=65536,t=2,p=1$DSEx0cYn8hmQro0nGLBgfw$+FAfVfETArtkfvOoaQP/SG0HFqJb3hRTHdd6JzwDnU4', first_name: 'Johnny', last_name: 'Brownnose', hourly_wage: 50, created_at: '2020-01-01 10:00:00', updated_at: '2020-01-01 10:00:00'},
        {id: 5, username: 'TheWaterBoy', hash: '$argon2id$v=19$m=65536,t=2,p=1$DSEx0cYn8hmQro0nGLBgfw$+FAfVfETArtkfvOoaQP/SG0HFqJb3hRTHdd6JzwDnU4', first_name: 'Bobby', last_name: 'Boucher', hourly_wage: 15.50, created_at: '2020-01-01 10:00:00', updated_at: '2020-01-01 10:00:00'}
      ]);
    });
};
