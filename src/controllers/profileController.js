const profileModel = require('../models/profileModel')

const jwt = require('jsonwebtoken')


exports.register = async (req, res) => {

    let reqBody = req.body

    try {

        const data = await profileModel.create(reqBody)
        res.json({status: 'successfully registered', data: data})

    } catch (error) {

        res.json({status: 'fail', data: error})

    }

}

exports.login = async (req, res) => {

    let reqBody = req.body

    try {
        
        const data = await profileModel.find(reqBody)

        if (data) {
            
            let Payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: reqBody.Email
            }
            let token = jwt.sign(Payload, 'secret')

            res.json({status: 'login complete', data: token})

        } else {
            res.json({status: 'invalid email or password'})
        }

    } catch (error) {

        res.json({status: 'fail', data: error})

    }

}


exports.readProfile = async (req, res) => {

    let email = req.headers.Email
    let Querry = {Email: email}

    try {

        const data = await profileModel.find(Querry)

        res.json({status: 'success', data: data})
        
    } catch (error) {
        res.json({status: 'fail', data: error})
    }

}

exports.updateProfile = async (req, res) => {

    let email = req.headers.Email
    let Querry = {Email: email}

    let reqBody = req.body

    try {

        const data = await profileModel.updateOne(Querry, reqBody)

        res.json({status: 'successfully changed your profile', data: data})
        
    } catch (error) {
        res.json({status: 'fail', data: error})
    }

}

exports.deleteProfile = async(req, res) => {

    let email = req.headers.Email
    let Querry = {Email: email}

    try {

        const data = await profileModel.deleteOne(Querry)

        res.json({status: 'successfully deleted your profile', data: data})
        
    } catch (error) {
        res.json({status: 'fail', data: error})
    }

}