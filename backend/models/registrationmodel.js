const mongoose=require("mongoose");

const resgSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("resgistration",resgSchema)