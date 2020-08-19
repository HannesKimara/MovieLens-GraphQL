const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    userId: Number,
    movieId: Number,
    tag: String,
    timestamp: Number
});

export const Tag = mongoose.model('Tag', TagSchema);
