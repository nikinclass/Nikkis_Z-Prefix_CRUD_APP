/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Item', table => {
    table.increments('id').primary;
    table.integer('UserId');
    table.string('ItemName');
    table.string('Description');
    table.integer('Quantity');
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Item');
  
};
