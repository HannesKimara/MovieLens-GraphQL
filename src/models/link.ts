const mongoose = require('mongoose');

const LinkSchema = mongoose.Schema({
    movieId: Number,
    imdbId: Number,
    tmdbId: Number
});

export const Link = mongoose.model('Link', LinkSchema);