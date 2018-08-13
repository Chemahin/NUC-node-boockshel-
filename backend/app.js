var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var projectRoutes = require("./src/project/projectsRouter");
var pollRouter = require("./src/poll/pollRouter");
var questionsRouter = require("./src/question/questionsRouter");
// var cors = require('cors');
// var bookshelf = require('bookshelf')(knex);

// var knex = require('knex')({
//     client: 'nac_test',
//     connection: {
//         host     : 'localhost',
//         user     : 'nac_test',
//         password : 'nac_test',
//         database : 'nac_test_bd',
//         charset  : 'utf8'
//     }
// });

// var ProjectBlock = bookshelf.Model.extend({
//     tableName: 'projects'
// });

// knex.schema.createTable('projects', function(table) {  
//     table.increments();
//     table.string('name');
//     table.string('createdData', 128);
//     table.string('createdPersonName', 128);
//     table.string('addedData', 128);
//     table.string('addedPersonName', 128);
//     table.timestamps();
// });

// var ProjectBlock = bookshelf.Model.extend({  
//     tableName: 'projects',
//     hasTimestamps: true,

//     verifyPassword: function(password) {
//         return this.get('password') === password;
//     }
// }, {
//     byEmail: function(email) {
//         return this.forge().query({where:{ email: email }}).fetch();
//     }
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

app.use('/projects', projectRoutes);
app.use('/polls', pollRouter);
app.use('/questions', questionsRouter);


var server = app.listen(8000, function () {
    console.log("app running on port.", server.address().port);
});