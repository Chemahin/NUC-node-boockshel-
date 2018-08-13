const bookshelf = require('./../../bookshelfConnect');

module.exports = bookshelf.Model.extend({
    tableName: 'projects'
});