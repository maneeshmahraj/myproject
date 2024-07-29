import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
    
       <div className='login-page'>
       <form >
        <div className='login-heading'>
          <h1>Welcome To,SignUp</h1>
          <p>Hi,we are glad you are back,please login</p>
        </div>
        <div className='login-items'>
          <label>User Name</label>
          <input type='text' placeholder='Enter your name' />
        </div>
        <div className='login-items'>
          <label>Mobile Number</label>
          <input type='number' placeholder='Enter your number' />
        </div>
        <div className='login-items'>
          <label>Email</label>
          <input type='email' placeholder='Enter your email' />
        </div>
        <div className='login-items'>
        <label>Password</label>

          <input type='password' placeholder='Enter your password' />
        </div>
        <div className='login-items'>
          <button>Sign Up</button>
        </div>
       
       </form>
       </div>
    <Outlet/>
    </>
  )
}

export default SignUp;