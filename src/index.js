const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const mongodbExcel=require('./routers/mongodb-excel')


const app=express()
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const port= process.env.PORT||3000

app.use(express.json())
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/docs', express.static(path.join(__dirname, 'docs')));

const router = new express.Router()
app.use(express.json());
router.get('/test',(req,res)=>{
    res.send('This is my router')
})
app.use(router)
app.use(userRouter)
app.use( mongodbExcel)



app.listen(port,()=>{
    console.log('server is up on port'+port)
})

