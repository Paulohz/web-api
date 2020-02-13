const Spoiler = require("../model/spoiler");

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;

    Spoiler.findById(id)
        .then(Spoiler => {
            if(spoiler) {
                response.send(spoiler);
            } else{
                response.status(404).send();
            }
        })
        .catch(error => next(error));
        
};