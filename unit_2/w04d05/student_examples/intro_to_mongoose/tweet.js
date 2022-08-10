const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: {type: Number, default: 0},
    sponsored: {type: Boolean, defautl: false}
}, {timestamps: true})

const Tweet = mongoose.model('Tweets',tweetSchema)
module.exports = Tweet