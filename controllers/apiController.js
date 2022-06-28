let db = require(__dirname + '/../database/models');

let apiController = {
    getMovies: function (req, res) {
        return res.json('bem vindo')
    },
};

module.exports = apiController;