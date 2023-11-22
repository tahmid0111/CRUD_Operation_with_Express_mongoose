const todoModel =require('../models/todoModel') //imported the todo model

// this is for creating a new todo
exports.createTodo = async (req, res) => {
    let reqBody = req.body
    let todostatus = 'new'
    let username = req.headers.UserName
    let myTodo = {
        UserName: username,
        TodoSubject: reqBody.TodoSubject,
        TodoStatus: todostatus,
        TodoDesc: reqBody.TodoDesc
    }

    try {

        const data = await todoModel.create(myTodo)

        res.json({status: 'your todo is created successfully'})
        
    } catch (error) {
        res.status(404).json({status: 'something went wrong'})
    }
}

// this is for reading all todos together
exports.readAllTodo = async (req, res) => {

    let email = req.headers.email
    let Querry = {Email: email}

    try {
        const data = await todoModel.find(Querry)

        res.json({status: "all the todo is here", data: data})

    } catch (error) {
        res.json({status: 'something went wrong'})
    }
}

// here you can see a single todo
exports.readSingleTodo = async (req, res) => {

    let id = req.params.id
    let Querry = {_id:id}
    try {
        const result = await todoModel.find(Querry)

        res.json({status: "your todo is here", data: result})
        
    } catch (error) {
        res.json({status: 'something went wrong'})
    }

}

// here you can filter all the todos by status
exports.readTodosByStatus = async (req, res) => {
    let email = req.headers.Email
    let status = req.params.status
    let Querry = {Email: email, TodoStatus: status}
    try {

        const data = await todoModel.find(Querry)

        res.json({status: 'all the todos are here', data: data})
        
    } catch (error) {
        res.json({status: 'something went wrong'})
    }
}

// here you can update your todoStatus

exports.updateStatus = async (req, res) => {

    let id = req.params.id
    let Querry = {_id: id}
    let updatedStatus = req.params.status
    let update = {
        TodoStatus: updatedStatus
    }

    try {

        const result = await todoModel.updateOne(Querry, update)

        res.json({status: 'all the todos are here', data: result})
        
    } catch (error) {
        res.json({status: 'something went wrong'})
    }
}

// here you can delete a todo
exports.removeOne = async (req, res) => {
    let id = req.params.id
    try {

        const result = await todoModel.findByIdAndDelete(id)

        res.json({status: 'todo has been removed', data: result})
    } catch (error) {
        res.json({status: 'something went wrong'})
    }
}


// here you can delete all the todos
exports.removeAll = async (req, res) => {

    let username = req.params.username
    let Querry = {UserName: username}
    try {

        const result = await todoModel.deleteMany(Querry)

        res.json({status: 'successfully removed all your todos', data: result})
    } catch (error) {
        res.json({status: 'something went wrong'})
    }
}