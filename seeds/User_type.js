/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('User').del()
  await knex('User').insert([
    {id: 1, FirstName: 'Michael', LastName: 'Smith', Username: 'MSmith', Password: '123ABC'},
    {id: 2, FirstName: 'Casey', LastName: 'Jones', Username: 'CJones', Password: '123ABC'},
    {id: 3, FirstName: 'Perry', LastName: 'Mason', Username: 'PMason', Password: '123ABC'} 
  ]);
};
