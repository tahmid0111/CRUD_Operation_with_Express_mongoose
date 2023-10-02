const express = require('express');
const app=express()
const mongoose = require('mongoose')
const cors = require('cors')

const bodyParser = require('body-parser')

const router = require('./src/routes/api');

app.use(bodyParser.json())
app.use(cors())

let URI="mongodb+srv://01tahmidemam:HR7CNUZlWp2RwZA2@cluster0.xxhkesf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI)


app.use('/user', router)



module.exports = app;