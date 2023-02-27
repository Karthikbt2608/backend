let mongoose=require('mongoose')

let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passsword:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('users',userSchema)