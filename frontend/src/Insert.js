
import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Insert = () => {

const [massge,setMassge]=useState("")
  const handleInput=(e)=>{

  }
  const handleFile=()=>{

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
   <>
    <div className='login-page'>
       <form onSubmit={handleSubmit}>
        <div className='login-heading'>
          <h1>Welcome To,InsertData</h1>
        {massge?  <p style={{color:"green"}}>Welcome Data has successfully  Inserted</p>:<p>Hi,we are glad you,please Insert</p>}
        </div>
        <div className='login-items'>
          <label for="name"> Name</label>
          <input type='text' placeholder='Enter your product name' name="name" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="price">price</label>
          <input type='text' placeholder='Enter your product price' name="price" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="image">Image</label>
          <input type='file'   onChange={handleFile} />
        </div>
        <div className='login-items'>
        <label for="catagory">Catagory</label>
         <select name='catagory' onChange={handleInput}>
          <option>Double Bed</option>
          <option>Single Bed</option>
          <option>Study table</option>
          <option> sofa</option>
          <option> dining</option>
          <option>wardrobe</option>
          <option>coffee-table</option>
          <option>tv-units</option>
         </select>
          
        </div>
        <div className='login-items'>
          <button >Insert</button>
        </div>
       
       </form>
       </div>
       <ToastContainer />
    
   </>
  )
}

export default Insert