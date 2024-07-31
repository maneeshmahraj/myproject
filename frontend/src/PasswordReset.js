import React from 'react'
import { useParams } from 'react-router-dom'

const PasswordReset = () => {
  const {id,token}=useParams();
  console.log(id," ",token)
  return (
    <div className='login-page'>
    <form >
     <div className='login-heading'>
       <h1>Enter Your Password</h1>
      
     </div>
     <div className='login-items'>
       <label>New Password</label>
       <input type='password' placeholder='Enter your reset password' />
     </div>
    
     <div className='login-items'>
       <button>change</button>
     </div>
    
    </form>
    </div>
  )
}

export default PasswordReset