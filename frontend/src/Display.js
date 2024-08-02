import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md";
const Display = () => {
    
    const [mydata,setMydata]=useState([]);
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

   const ans=mydata.map((key)=>{
    return(
        <>
         <div className='items-shop-detail1'>
          <img src={key.image} />
          <span>
         {key.about}
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>{key.price}</span></p>
          <h3><MdCurrencyRupee />{key.price}/Month</h3>
        </div>
        </>
    )
   })

  return (
    <>
    <div className='display-items'>
        <h1>Display Items</h1>
    <div className='items-shop-detail-display'>
       
     {ans}
     
     </div>
    </div>
    </>
  )
}

export default Display