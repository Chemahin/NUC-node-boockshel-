module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            port: '5432',
            host: 'localhost',
            user     : 'nac_test',
            password : 'nac_test',
            database : 'nac',
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations',
        },
    }
}