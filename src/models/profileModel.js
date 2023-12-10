const mongoose=require('mongoose')

const profileSchema = mongoose.Schema({

    UserName: {
        type: String,
        required: [true, 'please enter your name'],
        unique: true
    },

    Email: {
        type: String,
        required: [true, 'you must have an e-mail account'],
        unique: true
    },

    Country: {
        type: String
    },

    Password: {
        type: String,
        required: [true, 'please enter a strong password']
    }
    
},
{
    timestamps: true
}
)

const profileModel = mongoose.model('clients', profileSchema)

module.exports = profileModel