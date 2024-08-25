const mongoose = require('mongoose');



const characterSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String, required: true},
    thumbnail: {
        path: String,
        extension: String,
    }
});

module.exports = mongoose.model('character', characterSchema);