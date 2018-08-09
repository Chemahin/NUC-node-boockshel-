var polls = require("./../polls");

module.exports={

    list(req, res, next) {
        res.json(polls);
    }
}