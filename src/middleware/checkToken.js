const jwt = require('jsonwebtoken')

exports.decodeToken = (req, res) => {
    let Token = req.headers['token-key']

    jwt.verify(Token, "secret123", (err, decoded) => {
        if(err){

        }else{
            
        }
    })

    res.send(Token)
}