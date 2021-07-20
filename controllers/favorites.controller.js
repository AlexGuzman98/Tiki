const favoritesService = require('../services/favorites.service');

const favoritesController = {};

favoritesController.create = async function (req, res, next) {
  try {
    newFavorites = await favoritesService.createFavorites(req.body);
    return res.status(201).json({ newFavorites });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

favoritesController.getFavorites = async function (req, res, next) {
  try {
    const favorites = await favoritesService.getFavorites();
    return res.status(200).json({ status: 200, data: favorites, message: 'Successfully favorite song retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = favoritesController;
