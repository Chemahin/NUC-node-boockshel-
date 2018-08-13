var Projects = require("./projectModel");


module.exports={

    list(req, res, next) {
        new Projects().fetchAll()
        .then(function(projects) {
            res.send(projects.toJSON());
        }).catch(function(error) {
            console.log(error);
            res.send('An error occured');
        });
    }
}