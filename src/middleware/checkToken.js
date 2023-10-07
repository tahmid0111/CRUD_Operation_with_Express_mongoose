const jwt = require('jsonwebtoken')

module.exports=(req, res, next) => {
    let Token = req.headers['token-key']

    jwt.verify(Token, "secret123", (err, decoded) => {
        if(err){
            res.status(404).json({status: 'invalid Token', data: err})
        }else{
            next()
        }
    })
}