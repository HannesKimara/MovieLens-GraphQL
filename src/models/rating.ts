const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    userId: Number,
    movieId: Number,
    rating: Number,
    timestamp: Number
})

export const Rating = mongoose.model('Rating', RatingSchema);
