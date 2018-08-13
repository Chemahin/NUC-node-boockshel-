var config = require('config');
var dbConfig = config.get('appConfig.dbConfig');

module.exports = {
    development: {
        client: 'postgresql',
        connection: dbConfig,
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations',
        },
    }
}