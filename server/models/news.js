const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const newsSchema = new Schema({
    post_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'post'},
    comment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' }
})

module.exports = mongoose.model('news', newsSchema)