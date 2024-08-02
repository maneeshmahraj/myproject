const mongoose=require("mongoose");

const furnitureSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
       price:{
        type:String,
        required:true
       },
       image:{
        type:String,
        required:true
       },
       catagory:{
        type:String,
        required:true
       },
       about:{
        type:String,
        required:true
       },
       status:Boolean
      
})
module.exports=mongoose.model("furniture",furnitureSchema)