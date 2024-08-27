const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    author:{type:String},
    link: {type: String},
    video: {type: String},
    image: { type: String },
    title: { type: String },
    article: {type: String},
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema  

// const postSchema = new Schema({
//     media : {type: String},
//     article :{type: String},
//     title: {type: String},
//     date: {type: Date, default:Date.now}
// })

// module.exports = mongoose.model('post', postSchema)