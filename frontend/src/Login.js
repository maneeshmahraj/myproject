import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Login = () => {

  const [input,setInput]=useState({})
  const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  
  return (
    <>
    
       <div className='login-page'>
       <form onSubmit={handleSubmit}>
        <div className='login-heading'>
          <h1>Welcome Back,Login</h1>
          <p>Hi,we are glad you are back,please login</p>
        </div>
        <div className='login-items'>
          <label>Email</label>
          <input type='email' name='email' 
          placeholder='Enter your email address'
          value={input.email} onChange={handleInput} />
        </div>
        <div className='login-items'>
        <label>Password</label>

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
    <Outlet/>
    </>
  )
}

export default Login;