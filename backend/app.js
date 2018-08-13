var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var projectRoutes = require("./src/project/projectsRouter");
var pollRouter = require("./src/poll/pollRouter");
var questionsRouter = require("./src/question/questionsRouter");
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/projects', projectRoutes);
app.use('/api/polls', pollRouter);
app.use('/api/questions', questionsRouter);


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});