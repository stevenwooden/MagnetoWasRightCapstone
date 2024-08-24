const mongoose = require('mongoose');



const characterSchema = new mongoose.Schema({
    alias: { type: String, required: true},
    powers: {type: String, required: true},
    image: {type: String, required: true},
});

module.exports = mongoose.model('character', characterSchema);