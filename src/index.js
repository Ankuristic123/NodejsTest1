const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')


const app=express()
const port= process.env.PORT||3000

app.use(express.json())

const router = new express.Router()
router.get('/test',(req,res)=>{
    res.send('This is my router')
})
app.use(router)
app.use(userRouter)



app.listen(port,()=>{
    console.log('server is up on port'+port)
})

