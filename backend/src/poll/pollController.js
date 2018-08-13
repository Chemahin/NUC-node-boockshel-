var Polls = require("./pollModel");

module.exports={

    list(req, res, next) {
        new Polls().fetchAll()
        .then(function(polls) {
            res.send(polls.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
    }
}