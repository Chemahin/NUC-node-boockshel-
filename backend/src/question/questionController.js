var questions = require("./../questions");

module.exports={

    list(req, res, next) {
        res.json(questions);
    }
}