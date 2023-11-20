const todoModel =require('../models/todoModel')

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


exports.readnewtodos = async (req, res) => {
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