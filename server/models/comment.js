const mongoose = require("mongoose")
const Schema = mongoose.Schema  

const commentSchema = new Schema({
    postId: { type:mongoose.Schema.Types.ObjectId, ref:'user'},
    content : {type: 'String'}
})

module.exports = mongoose.model('comment', commentSchema )