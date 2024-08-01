
const regModel=require("../models/registrationmodel")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const nodemailer=require("nodemailer")
const secret_key="mk112"


const transporter=nodemailer.createTransport({
              service:"gmail",
              auth:{
                user:"mb124969@gmail.com",
                pass:"lcgkqvqhnlxecfog"
              }
})
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
            res.json({massage:"password does not match"})
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

const passwordReset=async(req,res)=>{
      const {email}=req.body;
      console.log(email);
      if(!email){
        res.json("enter your email")
      }
      try {
        const user=await regModel.findOne({email});
        if(user){
          const token=await jwt.sign({userId:user._id,email:user.email},secret_key,
            {expiresIn:"120s"}
          )
        const setusertoken=await regModel.findByIdAndUpdate({_id:user._id},{varifytoken:token},{new:true})
        if(setusertoken){
            const mailOptions={
                from:"mb124969@gmail.com",
                to:email,
                subject:"sending email for password reset",
                text:`this link valid only 2 minutes http://localhost:3000/forgetpassword/${user._id}/${setusertoken.varifytoken}`
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    res.json("email not send !!")
                }
                else{
                    console.log("email sent",info.response)
                    res.json("email send !!")

                }
            })
        }
        
        }

      } catch (error) {
        console.error("invalid ",error)
        
      }
}
const varifyData=async(req,res)=>{
    const {id,token}=req.params;
   try {
        const userValid=await regModel.findOne({_id:id,varifytoken:token});
    
        const varifyToken=await jwt.verify(token,secret_key)
       if(userValid&&varifyToken.userId){
        res.status(201).json({status:201,userValid})
       }
       else{
        res.status(401).json({status:401,massage:"user does not exist!!"})

       }
   } catch (error) {
    console.error("invalid ",error)
    
   }
}
const passwordChange=async(req,res)=>{
    const {id,token}=req.params;
  const {password}=req.body
    try {
        const userValid=await regModel.findOne({_id:id,varifytoken:token});
    
        const varifyToken=await jwt.verify(token,secret_key)
        if(userValid&&varifyToken.userId){
           const newpassword=await bcrypt.hash(password,10)
           const newuserpassword=await regModel.findByIdAndUpdate({_id:id},{password:newpassword})
           newuserpassword.save();
           res.status(201).json({status:201,newuserpassword})

           }
           else{
            res.status(401).json({status:401,massage:"user does not exist!!"})
    
           }
    } catch (error) {
    console.error("invalid ",error)
        
    }
}
module.exports={
    regData,
    logData,
    passwordReset,
    varifyData,
    passwordChange
}