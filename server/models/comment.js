const mongoose = require("mongoose")
const Schema = mongoose.Schema  

const commentSchema = new Schema({
    postId: { type:mongoose.Schema.Types.ObjectId, ref:'user'},
    content : {type: 'String'},
    date : {type: Date, default:Date.now}
})

module.exports = mongoose.model('comment', commentSchema )