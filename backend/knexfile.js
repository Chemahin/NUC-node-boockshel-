module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            port: '5432',
            host: 'localhost',
            database: 'test_db',
            user: 'test',
            password: 'test',
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations',
        },
    }
}