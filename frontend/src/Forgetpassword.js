import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Forgetpassword = () => {

    const [email,setEmail]=useState("");
        const [massage,setMassage]=useState(false)
    const setVal=(e)=>{
        let value=e.target.value;
        setEmail(value);
    }
    const sendLink=async(e)=>{
        e.preventDefault();
       let res= await fetch("/sendpasswordlink",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
       })
       const data =await res.json();
       if(data.status==201){
        setEmail("");
        setMassage(true)
       }
       else{
        toast.error("invelid user")
       }
    }
  return (
    <>
    <div className='login-page'>
       <form >
        <div className='login-heading'>
          <h1>Enter Your Email</h1>
         {
            massage?<p style={{color:"green"}}>password link send successfully in your email</p>:""
         }
        </div>
        <div className='login-items'>
          <label>Email</label>
          <input type='email' name='email' placeholder='Enter your email'  value={email} onChange={setVal} />
        </div>
       
        <div className='login-items'>
          <button onClick={sendLink}>Send</button>
        </div>
       
       </form>
       </div>
       <ToastContainer />
    </>
  )
}

export default Forgetpassword