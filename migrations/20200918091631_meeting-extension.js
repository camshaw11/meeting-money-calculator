exports.up = function(knex) {
  return knex.schema.table('meetings', table => {
    table.string('notes').defaultTo('')
    table.integer('max_duration').defaultTo(0)
    table.decimal('max_cost').defaultTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.table('meetings', table=>{
    table.dropColumn('notes')
    table.dropColumn('max_duration')
    table.dropColumn('max_cost')
  })
};
