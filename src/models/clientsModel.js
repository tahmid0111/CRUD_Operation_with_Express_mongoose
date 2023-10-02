const mongoose = require('mongoose')

const MongoSchema = mongoose.Schema({
    name: String,
    age: Number,
    country: String
})

const MongoModel = mongoose.model('clients', MongoSchema)

module.exports = MongoModel;