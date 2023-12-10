const express=require('express');
const router=express.Router()

// imported profile Controller
const { register, login, readProfile, updateProfile, deleteProfile } = require('../controllers/profileController');

const { authVerify } = require('../middleware/authVerify');

const { createTodo, readAllTodo, readSingleTodo, readTodosByStatus, updateStatus, removeOne, removeAll } = require('../controllers/todoController');

// all profile related APIS are here
router.post('/register', register)
router.post('/login', login)
router.get('/readprofile',authVerify, readProfile)
router.post('/updateprofile',authVerify, updateProfile)
router.post('/deleteprofile',authVerify, deleteProfile)


// all todo related APIS are here
router.post('/createtodo', authVerify, createTodo)
router.get('/readalltodo', authVerify, readAllTodo)
router.post('/readsingletodo/:id', authVerify, readSingleTodo)
router.get('/readtodosbystatus/:status', authVerify, readTodosByStatus)
router.post('/updatetodostatus/:id/:status', authVerify, updateStatus)

// deleting tasks are done here
router.post('/deletesingletodobyid/:id', authVerify, removeOne)
router.post('/deletealltodos/:username', authVerify, removeAll)


module.exports = router;
