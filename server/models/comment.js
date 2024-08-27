// const mongoose = require("mongoose")
// const Schema = mongoose.Schema  

// const commentSchema = new Schema({
//     postId: { type:mongoose.Schema.Types.ObjectId, ref:'post', required:true },
//     user : {type:'String'},
//     content : {type: 'String'},
//     date : {type: Date, default:Date.now}
// })

// module.exports = mongoose.model('comment', commentSchema )

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);