const mongoose=require('mongoose')

const profileSchema = mongoose.Schema({

    UserName: {
        type: String,
        required: [true, 'please enter your name']
    },

    Email: {
        type: String,
        required: [true, 'you must have an e-mail account']
    },

    Country: String,

    Password: {
        type: Number,
        required: [true, 'please enter a strong password']
    }
    
})

const profileModel = mongoose.model('clients', profileSchema)

module.exports = profileModel