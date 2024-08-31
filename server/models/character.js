const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
    powers: [String],
    image: String,
    alias: String,
    description: String
});

module.exports = mongoose.model('Character', characterSchema);