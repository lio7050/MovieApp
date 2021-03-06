var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;
var MoviesSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true
    },
    year: {
        type: String,
        trim: true
    },
    director: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Movies', MoviesSchema);