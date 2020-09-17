exports.up = function(knex) {
  return knex.schema.table('meetings', table => {
    table.string('notes')
    table.integer('max_duration')
    table.decimal('max_cost')
  })
};

exports.down = function(knex) {
  return knex.schema.table('meetings', table=>{
    table.dropColumn('notes')
    table.dropColumn('max_duration')
    table.dropColumn('max_cost')
  })
};
