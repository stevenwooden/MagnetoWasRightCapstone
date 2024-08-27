const mongoose = require('mongoose');
const Schema = mongoose.Schema

const characterSchema = new Schema({
    id: {type:Number},
    name: {type: String},
    alias: {type: String},
    powers: {type: String},
    description: {type: String},
    image: {
        small_url: {type: String},
        medium_url: {type: String},
        large_url: {type: String},
    },

});

module.exports = mongoose.model("character", characterSchema);