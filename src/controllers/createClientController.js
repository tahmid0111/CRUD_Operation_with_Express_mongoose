const MongoModel = require('../models/clientsModel')

exports.homepage = (req, res) => {
    res.send('hello world!')
}

exports.createClient = async (req, res) => {
    let reqBody = req.body;
    try {
        const data = await MongoModel.create(reqBody)
        res.status(200).json({status: "success", data: data})
    } catch (error) {
        res.status(404).json({status: "fail", data: err})
    }
}

// exports.createClient = (req, res) => {
//     let reqBody= req.body;
//     MongoModel.create(reqBody,(err,data)=>{
//         if(err){
//             res.status(400).json({status:"fail",data:err})
//         }
//         else{
//             res.status(200).json({status:"success",data:data})
//         }
//     })
// }

exports.readtClient = async (req, res) => {
    let Querry = {}
    let Projection = "name"
    try {
        const data = await MongoModel.find(Querry, Projection)
        res.status(200).json({status:"success",data:data})
    } catch (error) {
        res.status(400).json({status:"fail",data:err})
    }
}