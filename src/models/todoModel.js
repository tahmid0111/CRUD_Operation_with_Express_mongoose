const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    UserName: {
        type: String,
    },
    TodoSubject: {
        type: String,
        required: true
    },
    TodoStatus: {
        type: String,
        required: true
    },
    TodoDesc: {
        type: String,
        required: true
    }

},
{
    timestamps: true
}
)

const todoModel = mongoose.model('todos', todoSchema)

module.exports = todoModel