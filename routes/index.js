const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController.js');

// Routes
router.get('/', controller.homePage);
router.get('/allMovies', controller.allMovies);
router.get('/movie/:id', controller.movieByID);

router.post('/create', controller.Createmovie);
router.delete('/:id', controller.deleteMovie);
router.put('/:id', controller.updateMovie);

module.exports = router;