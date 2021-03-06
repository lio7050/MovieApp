const express = require('express');
const router = express.Router();
const moviesController = require('../app/api/controllers/movies');
router.post('/movie', moviesController.create); //add movie
router.post('/movies', moviesController.multiple); //add multiple movies
router.get('/movies', moviesController.search); //search movies
module.exports = router;