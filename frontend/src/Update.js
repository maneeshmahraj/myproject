import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { isAuthanticated } from './utils/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Update = () => {
    
    const [mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/api/user/displaydata";
        axios.get(api).then((res)=>{
             //console.log(res.data.mydata)
             setMydata(res.data.mydata);
        })
    }
    useEffect(()=>{
        loadData();
    },[])

    const deleteitems=(id)=>{
    let api="http://localhost:8000/api/user/deleteData";
    axios.post(api,{id:id}).then((res)=>{
        console.log(res.data)
        toast(res.data,{
            position:"top-center"
        })
        loadData();
    })
    }
    const editData=(id)=>{
      navigate(`/edit/${id}`)
    }
   const ans=mydata.map((key)=>{
    return(
        <>
         <div className='items-shop-detail3'>
          <img src={key.image} />
          <span>
         {key.about}
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>{key.price}</span></p>
          <h3><MdCurrencyRupee />{key.price}/Month</h3>
          <div className='del' onClick={()=>{deleteitems(key._id)}} ><button>Delete</button></div>
          <div className='edit'onClick={()=>{editData(key._id)}} ><button>Edit</button></div>
        </div>
        </>
    )
   })
if(!isAuthanticated()){
    return <Navigate to="/login"/>
}
  return (
    <>
    <div className='display-items'>
        <h1>Update Items</h1>
    <div className='items-shop-detail-display'>
       
     {ans}
     
     </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Update