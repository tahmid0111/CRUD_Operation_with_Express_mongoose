const express = require('express');
const app=express()
const mongoose = require('mongoose')
const cors = require('cors')

const bodyParser = require('body-parser')

const router = require('./src/routes/api');

app.use(bodyParser.json())
app.use(cors())

let URI="mongodb://localhost:27017/clients";

mongoose.connect(URI)


app.use(router)



module.exports = app;