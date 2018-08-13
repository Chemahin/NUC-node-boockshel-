exports.up = function(knex) {
    return knex.schema
        .createTable('questions', (table) => {
            table.increments('id').primary();
            table.string('version');
            table.string('body_of_question');
            table.string('type_of_answer');
            table.string('descriptions');
            table.date('beginning_date');
            table.date('end_date');   
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('questions');
};