const jwt=require('jsonwebtoken')


exports.authVerify = (req, res, next) => {

    let Token = req.headers.token

    try {

        const decoded = jwt.verify(Token, 'secret')

        let email = decoded.data
        req.headers.Email = email

        next()


        
    } catch (error) {
        
        res.json({status: 'fail', data: error})

    }

}