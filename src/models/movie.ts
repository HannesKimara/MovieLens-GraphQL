const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = Schema({
    movieId: {type: Number},
    title: {type: String},
    genres: {type: String},
});

export const Movie = mongoose.model('Movie', MovieSchema)
