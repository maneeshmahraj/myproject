import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
  const [mydata,setMydata]=useState({})
const [massge,setMassge]=useState(false)
const navigate=useNavigate()
const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setMydata(values=>({...values,[name]:value}))
}

const handleSubmit=(e)=>{
   e.preventDefault();
  let api="http://localhost:8000/api/user/registration";
   axios.post(api,mydata).then((res)=>{
    toast.success(res.data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
     
      
      });
     
    setMassge(true);
    
   })
}
  return (
    <>
    
       <div className='login-page'>
       <form onSubmit={handleSubmit}>
        <div className='login-heading'>
          <h1>Welcome To,SignUp</h1>
        {massge?  <p style={{color:"green"}}>Hi,we are glad you to,successfully data insert</p>:<p>Hi,we are glad you,please Sign Up</p>}
        </div>
        <div className='login-items'>
          <label for="name"> Name</label>
          <input type='text' placeholder='Enter your name' name="name" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="mobile">Mobile Number</label>
          <input type='text' placeholder='Enter your number' name="mobile" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="email">Email</label>
          <input type='email' placeholder='Enter your email' name="email" onChange={handleInput} />
        </div>
        <div className='login-items'>
        <label for="password">Password</label>

          <input type='password' placeholder='Enter your password' name="password" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <button >Sign Up</button>
        </div>
       
       </form>
       </div>
       <ToastContainer />
    <Outlet/>
    </>
  )
}

export default SignUp;