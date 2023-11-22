const express=require('express');
const router=express.Router()

// imported profile Controller
const { register, login, readProfile, updateProfile, deleteProfile } = require('../controllers/profileController');

const { authVerify } = require('../middleware/authVerify');

const { createTodo, readAllTodo, readnewtodos, readSingleTodo, readTodosByStatus, updateStatus } = require('../controllers/todoController');


router.post('/register', register)
router.post('/login', login)

router.get('/readprofile',authVerify, readProfile)
router.post('/updateprofile',authVerify, updateProfile)
router.post('/deleteprofile',authVerify, deleteProfile)

router.post('/createtodo', authVerify, createTodo)
router.get('/readalltodo', authVerify, readAllTodo)
router.post('/readsingletodo/:id', authVerify, readSingleTodo)
router.get('/readtodosbystatus/:status', authVerify, readTodosByStatus)
router.post('/updatetodostatus/:id/:status', authVerify, updateStatus)


module.exports = router;
