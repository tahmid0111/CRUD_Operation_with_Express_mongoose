const express = require('express');
const app=express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const bodyParser = require('body-parser')

const router = require('./src/routes/api');

app.use(bodyParser.json())
app.use(cors())

let URI=process.env.URI;

mongoose.connect(URI)

app.use('/user', router)



module.exports = app;