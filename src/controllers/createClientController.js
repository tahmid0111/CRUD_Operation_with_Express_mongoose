const MongoModel = require('../models/clientsModel')

exports.homepage = (req, res) => {
    res.send('hello world!')
}

exports.createClient = (req, res) => {
    let reqBody= req.body;
    MongoModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}