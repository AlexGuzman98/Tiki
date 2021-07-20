const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favorites.controller');

router.post('/favorites', favoritesController.create);
router.get('/favorites', favoritesController.getFavorites);

module.exports = router;
