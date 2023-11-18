const express=require('express');
const router=express.Router()

// imported profile Controller
const { register, login, readProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const { authVerify } = require('../middleware/authVerify');


router.post('/register', register)
router.post('/login', login)

router.get('/readprofile',authVerify, readProfile)
router.post('/updateprofile',authVerify, updateProfile)
router.post('/deleteprofile',authVerify, deleteProfile)


module.exports = router;
