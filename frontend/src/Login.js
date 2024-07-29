import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <>
    
       <div className='login-page'>
       <form >
        <div className='login-heading'>
          <h1>Welcome Back,Login Page</h1>
          <p>Hi,we are glad you are back,please login</p>
        </div>
        <div className='login-items'>
          <label>Email</label>
          <input type='email' />
        </div>
        <div className='login-items'>
        <label>Password</label>

          <input type='password' />
        </div>
        <div className='login-items'>
          <button>login</button>
        </div>
        <div className='login-items1'>
          <span>don`t have an Account:<Link to="regitration">Sign Up</Link></span>
          <span>forgate password:<Link to="regitration">reset-password</Link></span>

        </div>
       </form>
       </div>
    <Outlet/>
    </>
  )
}

export default Login;