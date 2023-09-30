const express=require('express');
const app=express()

const router = require('./src/routes/api');


app.use(router)



module.exports = app;