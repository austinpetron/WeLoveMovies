exports.up = function(knex) {
    return knex.schema.createTable("critics", (table) => {
      table.increments("critic_id").primary();//setting critic_id as primary key
      table.string("preferred_name");
      table.string("surname");
      table.string("organization_name");
      table.timestamps(true, true);//Adds create_at and updated_at columns
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("critics");
  };
