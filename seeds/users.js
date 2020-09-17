
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'TheBoss', hash: '', first_name: 'Boss', last_name: 'Scrooge', hourly_wage: 300, created_at: new Date(1/1/2020), updated_at: new Date(1/1/2020)}
        {id: 2, username: 'TheJunior', hash: '', first_name: 'Leeroy', last_name: 'Jenkins', hourly_wage: 20, created_at: new Date(1/1/2020), updated_at: new Date(1/1/2020)}
        {id: 3, username: 'TheSenior', hash: '', first_name: 'Sirious', last_name: 'Egp', hourly_wage: 160, created_at: new Date(1/1/2020), updated_at: new Date(1/1/2020)}
        {id: 4, username: 'TheReceptionist', hash: '', first_name: 'Johnny', last_name: 'Brownnose', hourly_wage: 50, created_at: new Date(1/1/2020), updated_at: new Date(1/1/2020)}
        {id: 5, username: 'TheWaterBoy', hash: '', first_name: 'Bobby', last_name: '', hourly_wage: , created_at: new Date(1/1/2020), updated_at: new Date(1/1/2020)}
      ]);
    });
};
