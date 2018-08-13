const knex = require('knex')({
    client: 'postgresql',
    connection: {
        port: '5432',
        host: 'localhost',
        user     : 'nac_test',
        password : 'nac_test',
        database : 'nac',
    }
});

    const bookshelf = require('bookshelf')(knex);

    module.exports = bookshelf