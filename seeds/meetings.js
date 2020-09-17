
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1,   meeting_name: 'The Bizness', duration: 7200000,  attendees: 4, cost: 1060,                  created_at: '2020-01-01 10:00:00', updated_at: '2020-01-01 10:00:00', notes: 'The boss is boss, and bizness was done.', max_duration: 0, max_cost:0},
        {id: 2,   meeting_name: 'Marketing Meeting', duration: 4320000,  attendees: 3, cost: 612,             created_at: '2020-02-02 10:00:00', updated_at: '2020-02-02 10:00:00', notes: 'We need to make more money. Figure it out.', max_duration: 0, max_cost:0},
        {id: 3,   meeting_name: 'Fundraiser', duration: 14400000, attendees: 4, cost: 982,                    created_at: '2020-03-03 10:00:00', updated_at: '2020-03-03 10:00:00', notes: 'If we pretend to be a charity do you think we will get free money?', max_duration: 0, max_cost:0},
        {id: 4,   meeting_name: 'Weird Smell in Break Room', duration: 5400000,  attendees: 2, cost: 473.25,  created_at: '2020-04-04 10:00:00', updated_at: '2020-04-04 10:00:00', notes: 'Bobby knows what he did.', max_duration: 0, max_cost:0},
        {id: 5,   meeting_name: 'Food Theft', duration: 1800000,  attendees: 3, cost: 112.75,                 created_at: '2020-05-05 10:00:00', updated_at: '2020-05-05 10:00:00', notes: 'Does anyone else think the boss eats our food?', max_duration: 0, max_cost:0},
        {id: 6,   meeting_name: 'Merger Meeting', duration: 1188000,  attendees: 3, cost: 168.3,              created_at: '2020-06-06 10:00:00', updated_at: '2020-06-06 10:00:00', notes: 'Rich company wants in, but I just want them for their money', max_duration: 0, max_cost:0},
        {id: 7,   meeting_name: 'Disciplinary Meeting', duration: 6300000,  attendees: 2, cost: 560,          created_at: '2020-07-07 10:00:00', updated_at: '2020-07-07 10:00:00', notes: 'Matt kicked the company cat.', max_duration: 0, max_cost:0},
        {id: 8,   meeting_name: 'The Big Ol Pow Wow', duration: 18000000, attendees: 5, cost: 2727.50,        created_at: '2020-08-08 10:00:00', updated_at: '2020-08-08 10:00:00', notes: 'The boss did a slideshow of his holiday in Aspen.', max_duration: 0, max_cost:0},
        {id: 9,   meeting_name: 'New Tech Demo', duration: 3600000,  attendees: 3, cost: 480,                 created_at: '2020-09-09 10:00:00', updated_at: '2020-09-09 10:00:00', notes: 'New stuff costs money. The answer is no.', max_duration: 0, max_cost:0},
        {id: 10,  meeting_name: 'Coup Planning', duration: 450000,   attendees: 3, cost: 29.9,                created_at: '2020-10-10 10:00:00', updated_at: '2020-10-10 10:00:00', notes: 'I think we need to mutiny.', max_duration: 0, max_cost:0}, 
      ]);
    });
};
