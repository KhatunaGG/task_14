const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const postsSchema = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true
    },
    postedAt: String
})


module.exports = mongoose.model('Posts', postsSchema)