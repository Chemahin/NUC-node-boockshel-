var config = require('config');
var dbConfig = config.get('appConfig.dbConfig');
const knex = require('knex')({
    client: 'postgresql',
    connection: dbConfig
});

    const bookshelf = require('bookshelf')(knex);

    module.exports = bookshelf