exports.up = function(knex) {
    return knex.schema
        .createTable('polls', (table) => {
            table.increments('id').primary();
            table.string('name_of_project');
            table.string('descriptions');
            table.string('file_url');
            table.string('language');
            table.string('determination_of');
            table.date('beginning_date');
            table.date('end_date');
            table.string('version');
            
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('polls');
};