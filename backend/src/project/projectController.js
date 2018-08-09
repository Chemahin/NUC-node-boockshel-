var projects = require("./../projects");

module.exports={

    list(req, res, next) {
        res.json(projects);
    }
}