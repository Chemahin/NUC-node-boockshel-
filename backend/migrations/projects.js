exports.up = function(knex) {
    return knex.schema
        .createTable('projects', (table) => {
            table.increments('id').primary();
            table.string('name_of_project');
            table.string('descriptions');
            table.string('selection_type');
            table.integer('periodicity');
            table.string('executant');
            table.string('author');
            table.string('survey_type');
            table.date('beginning_date');
            table.date('end_date');
            table.string('survey_methods');
            
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('projects');
};