const mongoose = require('mongoose')

const MongoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please put your name'],
        unique: true
    },
    age: {
        type: Number,
        min: 18,
        max: [30, `your age is more than 30` ],
        required: true,
    },
    country: {
        type: String,
        enum: {
            values: ['bd', 'agf'],
            message: `you should be from bd or afg not from {VALUE}`
        }
    },
    phone: {
        type: Number,
        validate: {
            validator: (v)=> {
                if(v==10){
                    return 'right'
                }else{
                    return 'wrong'
                }
            }
        }
    }
})

const MongoModel = mongoose.model('clients', MongoSchema)

module.exports = MongoModel;