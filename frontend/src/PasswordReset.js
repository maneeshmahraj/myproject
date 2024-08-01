import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const PasswordReset = () => {
  const {id,token}=useParams();
  const [value,setValue]=useState("")
  const [massage,setMassage]=useState("")
  const navigate=useNavigate()
  // console.log(id," ",token)

  const userValid=async()=>{
    
    let api= await `http://localhost:8000/api/user/forgatepassword/${id}/${token}`;
    axios.get(api).then((res)=>{
      if(res.data.status==201){
       // console.log(res.data)
      }
      else{
        navigate("*");
      }
    })
  }
useEffect(()=>{
  userValid();
},[])
const handleClick=async(e)=>{
  e.preventDefault();
  let api= await `http://localhost:8000/api/user/newpassword/${id}/${token}`;

 axios.post(api,{password:value}).then((res)=>{
  if(res.data.status==201){
    setValue("");
    setMassage(true)
    console.log(res.data)
   }
   else{
     toast.error(" token expired!! ")
   }
 })
}
  return (
   <>
    <div className='login-page'>
    <form >
     <div className='login-heading'>
       <h1>Enter Your Password</h1>
       {
            massage?<p style={{color:"green"}}>New password  successfully change!!</p>:""
         }
     </div>
     <div className='login-items'>
       <label for="password">New Password</label>
       <input type='password' name='password' value={value} placeholder='Enter your reset password' onChange={(e)=>{setValue(e.target.value)}} />
     </div>
    
     <div className='login-items'>
       <button onClick={handleClick}>change</button>
     </div>
    
    </form>
    </div>
    <ToastContainer/>
   </>
  )
}

export default PasswordReset