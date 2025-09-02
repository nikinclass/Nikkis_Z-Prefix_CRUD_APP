// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.up = function(knex) {
  return knex.schema.createTable('User', table => {
    table.increments('id').primary;
    table.string('FirstName');
    table.string('LastName');
    table.string('Username');
    table.string('Password');
  })
  
};

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('User');
  
};
