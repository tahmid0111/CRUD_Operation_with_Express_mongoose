const jwt = require('jsonwebtoken')

exports.tokenIssue = (req, res) => {
    const Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {name: "Nahid", city: "Rajshahi", admin: true}
    }

    let Token = jwt.sign(Payload, "secret123")

    res.send(Token)
}