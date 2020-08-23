const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    movieId: {type: String},
    title: {type: String},
    genres: {type: String},
});

export const Movie = mongoose.model('Movie', MovieSchema)
