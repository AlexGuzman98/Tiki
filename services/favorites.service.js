const Favorite = require('../models/favorites.model');
const favoritesService = {};

favoritesService.createFavorites = async function ({id_song, id_user}) {
  try {
    const favorites = new Favorite ({id_song, id_user});
    const newFavorites = await favorites.save();
    return newFavorites;
  } catch(e) {
    throw new Error ('Error while save the favorite song');
  }
};

favoritesService.getFavorites = async function () {
  try {
    const favorites = await Favorites.find({});
    return favorites;
  } catch (error) {
    throw new Error ('Error while Pginating the favorite song');
  }
};

module.exports = favoritesService;