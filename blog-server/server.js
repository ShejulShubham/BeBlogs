const express = require('express')
const cors = require('cors')
const utils = require('./utils')
const config = require('./config')
const app = express()


//cors and json middleware
app.use(cors())
app.use(express.json())


//routes
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')

app.use('/user', userRouter)
app.use('/blog', blogRouter)



//server start message
app.listen(4000, '0.0.0.0', ()=>{
    console.log(`server started at port 4000`)
})