exports.up = function(knex) {
  return knex.schema.createTable('meetings', table => {
    table.increments('id')
    table.string('meeting_name')
    table.decimal('duration')
    table.integer('attendees')
    table.decimal('cost')
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('meetings')
};
