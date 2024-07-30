
const regModel=require("../models/registrationmodel")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const secret_key="mk112"

const regData=async(req,res)=>{
    try { 
        const {name,mobile,email,password}=req.body;
        
        const hashpassword=await bcrypt.hash(password,10)
        const mydata=await regModel.create({
            name:name,
            mobile:mobile,
            email:email,
            password:hashpassword
        })
       
        res.status(201).send("registration successfully done!!")
    } catch (error) {
        console.error("invalid ",error)

    }
}

const logData=async(req,res)=>{
    try {
        const {email,password}=req.body;
      
       const user=await regModel.findOne({email});
       if(user){
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return;
        } 
        else{
            const token=await jwt.sign({userId:user._id,username:user.name,email:user.email},secret_key);
          
            res.status(201).json({token:token,username:user.name,email:user.email,massage:"you are login.."})
        }
       }
       else{
          res.json({massage:"password does not match"})
       }
    } catch (error) {
        console.error("invalid ",error)
        
    }
}




module.exports={
    regData,
    logData
}