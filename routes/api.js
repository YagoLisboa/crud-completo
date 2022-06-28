var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

//list mmovies
router.get('/movies', apiController.getMovies);

module.exports = router;

