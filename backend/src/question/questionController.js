var Questions = require("./questionModel");


module.exports={

    list(req, res, next) {
        new Questions().fetchAll()
        .then(function(questions) {
            res.send(questions.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
    }
}