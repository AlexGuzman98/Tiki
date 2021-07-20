// User's models database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema ({
    id_song: {
        type: String,
        required: true
    },
    id_user: {
        type: [String],
        required: true
    },
}, {versionKey: false });

const Favorites = mongoose.model('Favorites', favoritesSchema);
module.exports = Favorites;