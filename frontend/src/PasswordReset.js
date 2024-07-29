import React from 'react'

const PasswordReset = () => {
  return (
    <div className='login-page'>
    <form >
     <div className='login-heading'>
       <h1>Enter Your reset Password</h1>
      
     </div>
     <div className='login-items'>
       <label>Password</label>
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