const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ankur-api',{
    useNewUrlParser:true,
    // useCreateIndex:true
    // usefindAndModify:false
})


// const User = mongoose.model('User',{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })

// const me = new User(({
//     name:"Ankur",
//     age:18
// }))


// me.save().then(()=>{
//     console.log(me)

// }).catchh((error)=>{
//     console.log("Error",error)
// })