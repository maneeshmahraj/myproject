
import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { isAuthanticated } from './utils/auth';
import { Navigate } from 'react-router-dom';
const Insert = () => {
const [mydata,setMydata]=useState({});

const [massge,setMassge]=useState("")
const [files,setFiles]=useState("")
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));

  }
  console.log(mydata.massage);
  const handleFile=(e)=>{
  setFiles(e.target.files[0])
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("file",files)
    formData.append("upload_preset",'jpnppfpt')
    formData.append('cloud_name','dqsi8ffeg')
   const responce=await axios.post('http://api.cloudinary.com/v1_1/dqsi8ffeg/image/upload',formData)
  //  console.log(responce.data.url);
    let api="http://localhost:8000/api/user/cloudinaryurl";
       await  axios.post(api,{name:mydata.name,price:mydata.price,massage:mydata.massage,image:responce.data.url,catagory:mydata.catagory}).then((res)=>{
          toast(res.data,{
            position: "top-center",
        
            })
            setMassge(true)
         })
  }
if(!isAuthanticated()){
  return <Navigate to="/login"/>
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
          <label for="name">Product Name</label>
          <input type='text' placeholder='Enter your product name' name="name" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="price">price</label>
          <input type='number' placeholder='Enter your product price' name="price" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="image">Image</label>
          <input type='file'   onChange={handleFile} />
        </div>
        <div className='login-items'>
          <label >TextArea</label>
        <textarea rows={5} cols={50} name='massage' onChange={handleInput} ></textarea>
        </div>
        <div className='login-items'>
        <label for="catagory">Catagory</label>
         <select name='catagory' onChange={handleInput}>
         <option>select</option>
          <option>Double Bed</option>
          <option>Single Bed</option>
          <option>Study table</option>
          <option>Dresser</option>
          <option> dining-table</option>
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