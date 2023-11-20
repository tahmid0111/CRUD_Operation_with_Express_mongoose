const jwt=require('jsonwebtoken')


exports.authVerify = (req, res, next) => {

    let Token = req.headers.token

    try {

        const decoded = jwt.verify(Token, 'secretkey')

        let email = decoded.data.Email
        let username = decoded.data.UserName

        req.headers.Email = email
        req.headers.UserName = username

        next()


        
    } catch (error) {
        
        res.json({status: 'fail', data: error})

    }

}