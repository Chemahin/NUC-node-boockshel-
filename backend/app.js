var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var projectRoutes = require("./src/project/projectsRouter");
var pollRouter = require("./src/poll/pollRouter");
var questionsRouter = require("./src/question/questionsRouter");
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/projects', projectRoutes);
app.use('/polls', pollRouter);
app.use('/questions', questionsRouter);


var server = app.listen(8000, function () {
    console.log("app running on port.", server.address().port);
});