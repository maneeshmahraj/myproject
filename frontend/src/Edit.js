
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { isAuthanticated } from './utils/auth';
import { Navigate } from 'react-router-dom';
const Edit = () => {
    const {id}=useParams();
    const [mydata,setMydata]=useState({});

const [massge,setMassge]=useState("")

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));

  }
  console.log(mydata.massage);
  
  const loadData=()=>{
    const api="http://localhost:8000/api/user/editData";
    axios.post(api,{id:id}).then((res)=>{
        setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[])
  const handleSubmit=async(e)=>{
    e.preventDefault();
  
    let api="http://localhost:8000/api/user/updateData";
       await  axios.post(api,{id:id,name:mydata.name,price:mydata.price,about:mydata.about,catagory:mydata.catagory}).then((res)=>{
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
        {massge?  <p style={{color:"green"}}>Welcome Data has successfully  updated</p>:<p>Hi,we are glad you,please update</p>}
        </div>
        <div className='login-items'>
          <label for="name">Product Name</label>
          <input type='text' placeholder='Enter your product name' value={mydata.name} name="name" onChange={handleInput} />
        </div>
        <div className='login-items'>
          <label for="price">price</label>
          <input type='text' placeholder='Enter your product price' value={mydata.price} name="price" onChange={handleInput} />
        </div>
       
        <div className='login-items'>
          <label >TextArea</label>
        <textarea rows={5} cols={50} name='about' value={mydata.about} onChange={handleInput} ></textarea>
        </div>
        <div className='login-items'>
        <label for="catagory">Catagory</label>
         <select name='catagory' value={mydata.catagory} onChange={handleInput}>
         <option>select</option>
          <option>Double Bed</option>
          <option>Single Bed</option>
          <option>Study table</option>
          <option> sofa</option>
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

export default Edit