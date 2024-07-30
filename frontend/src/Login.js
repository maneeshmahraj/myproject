import axios from 'axios';
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const [input,setInput]=useState({})
const [massge,setMassge]=useState(false)

  const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/api/user/login";
    axios.post(api,input).then((res)=>{
       localStorage.setItem("token",res.data.token)
       localStorage.setItem("username",res.data.username)
       localStorage.setItem("email",res.data.email)
    
       if(res.data.massage=="you are login.."){
        toast.success(res.data.massage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
         
          
          });
          setMassge(true)
       }
       else{
        toast.error("password does not exist", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
         
          
          });
       }

    })
  }
  
  return (
    <>
    
       <div className='login-page'>
       <form onSubmit={handleSubmit}>
        <div className='login-heading'>
          <h1>Welcome Back,Login</h1>
         {massge? <p style={{color:"green"}}>welcome you are login successfully</p>: <p>Hi,we are glad you are back,please login</p>}
        </div>
        <div className='login-items'>
          <label for="email">Email</label>
          <input type='email' name='email' 
          placeholder='Enter your email address'
          value={input.email} onChange={handleInput} />
        </div>
        <div className='login-items'>
        <label for="password">Password</label>

          <input type='password' name='password'
          placeholder='Enter your password'
          value={input.password} onChange={handleInput}  />
        </div>
        <div className='login-items'>
          <button >login</button>
        </div>
        <div className='login-items1'>
          <span>don`t have an Account:<Link to="/signup" style={{textDecoration:"underline"}}>Sign Up</Link></span>
          <span style={{fontWeight:"bold",color:"black"}}>forgate password:<Link to="/passwordreset" style={{textDecoration:"underline"}}>Click here</Link></span>

        </div>
       </form>
       </div>
       <ToastContainer />
    <Outlet/>
    </>
  )
}

export default Login;