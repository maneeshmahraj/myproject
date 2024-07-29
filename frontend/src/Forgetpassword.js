import React from 'react'

const Forgetpassword = () => {
  return (
    <>
    <div className='login-page'>
       <form >
        <div className='login-heading'>
          <h1>Enter Your Email</h1>
         
        </div>
        <div className='login-items'>
          <label>Email</label>
          <input type='email' />
        </div>
       
        <div className='login-items'>
          <button>Send</button>
        </div>
       
       </form>
       </div>
   
    </>
  )
}

export default Forgetpassword