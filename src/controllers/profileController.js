const profileModel = require('../models/profileModel')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


exports.register = async (req, res) => {

    let reqBody = req.body
    let hashedPassword = await bcrypt.hash(reqBody.Password, 10)
    let myBody = {
        UserName: reqBody.UserName,
        Email: reqBody.Email,
        Country: reqBody.Country,
        Password: hashedPassword
    }

    try {

        const data = await profileModel.create(myBody)
        res.json({status: 'successfully registered', data: data})

    } catch (error) {

        res.json({status: 'fail', data: error})

    }

}

exports.login = async (req, res) => {

    let reqBody = req.body
    let Querry = {Email: reqBody.Email}

    try {

        const alldata = await profileModel.findOne(Querry)
        
        if(alldata) {

            const result = await bcrypt.compare(reqBody.Password, alldata.Password)

            if(result) {

                let Payload = {
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    data: alldata
                }
                let token = jwt.sign(Payload, 'secretkey')

                res.json({status: 'login successful', data: token})

            }else{
                res.json({status: 'invalid username or password'})
            }
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