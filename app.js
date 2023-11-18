const express=require('express')
const app=express()

const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./src/routes/api')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const URI = process.env.URI

mongoose.connect(URI)

app.use('/user', router)

module.exports = app