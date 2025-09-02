/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Item').del()
  await knex('Item').insert([
    {id: 1, UserId: 1, ItemName: 'Laptop', Description: 'Lenovo Laptop', Quantity: 1},
    {id: 2, UserId: 2, ItemName:  'Monitor', Description:  'LG Monitor', Quantity: 1},
    {id: 3, UserId: 3, ItemName:  'iPad', Description:  'Apple iPad', Quantity: 1} 
  ]);
};
