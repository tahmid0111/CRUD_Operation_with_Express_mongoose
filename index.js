const express=require('express')
const app=express()
const PORT = process.env.PORT || 3000


require('dotenv').config();

app.listen(PORT, ()=> {
    console.log(`server run success`)
})
