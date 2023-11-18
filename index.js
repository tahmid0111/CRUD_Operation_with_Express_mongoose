const app=require('./app')

// PORT from the env file
require('dotenv').config()
const PORT = process.env.PORT || 8080


app.listen(PORT)