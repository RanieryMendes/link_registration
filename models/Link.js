const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema(
    {
     title: {type: String, required: true},

     description: {type: String, required: true},

     url: String,

    clicks: {type: Number, default: 0},
    }
)

module.exports =  mongoose.model('link', linkSchema)


