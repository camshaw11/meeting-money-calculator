exports.up = function(knex) {
  return knex.schema.createTable('meetings', table => {
    table.increments('id')
    table.string('meeting_name').defaultTo('')
    table.integer('duration').defaultTo(0)
    table.integer('attendees').defaultTo(0)
    table.decimal('cost').defaultTo(0.0)
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('meetings')
};
