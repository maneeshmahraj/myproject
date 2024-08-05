import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addItems } from './productSlice';
const  Doublebed = () => {
    
    const [mydata,setMydata]=useState([]);
    const [ratting,setRatting]=useState("");
    const [status,setStatus]=useState(false)
    const [hover,setHover]=useState(0);
   const dispatch=useDispatch();
    const loadData=()=>{
        let api="http://localhost:8000/api/user/doulbebeddata";
        axios.get(api).then((res)=>{
             setMydata(res.data.mydata);
        })
    }
  
    const rattingStar=(id)=>{
     let api="http://localhost:8000/api/user/stardata";
     axios.post(api,{id:id,ratting:ratting,status:status}).then((res)=>{
      setStatus(!status)
      loadData();
     })
    }
  
    useEffect(()=>{
        loadData();
    },[])
const addCardItem=async(id)=>{
  let api="http://localhost:8000/api/user/addcard";
  axios.post(api,{id:id}).then((res)=>{
    //console.log("card items: ",res.data)
    dispatch(addItems({id:res.data._id,name:res.data.name,price:res.data.price,image:res.data.image,about:res.data.about,quentity:1}))
  })
}
   const ans=mydata.map((key)=>{
    return(
        <>
         <div className='items-shop-detail3'>
          <img src={key.image} />
          <span>
         {key.about}
          </span>
          {/* <p><MdCurrencyRupee style={{marginLeft:"100px"}} /><span style={{fontSize:"15px"}} className='rupey2'>{key.price}</span></p> */}
          <div className='star'>
        <span style={{fontWeight:"bold"}}>Star Ratting : </span>
        <div onClick={()=>{rattingStar(key._id)}}>
         {
               [1,2,3,4,5].map((num)=>{
                return(
                <>
                  <button 
                  onClick={()=>{setRatting(num)}}
                  onMouseOver={()=>{setHover(num)}}
                  onMouseLeave={()=>{setHover(ratting)}}
                  >
                    <span className={`star1 ${key.status&&num<=((ratting&&hover)||hover)?"on":"off"} `}><IoStarSharp /></span>
                  </button>
                </>
                )
               })
         }
        </div>
    </div>
          <h3><MdCurrencyRupee style={{color:"orangered"}} />{key.price}/Month</h3>
          <div className='addToCart'>
         <button className='add-cart-btn'onClick={()=>{addCardItem(key._id)}}> <FaShoppingCart className='add-cart-icon' /> ADD TO CART</button>
            <button className='add-cart-btn2'><FaQuestionCircle className='add-cart-icon' style={{color:"black"}}/> NEED HELP ?</button>

          </div>
        </div>
        </>
    )
   })

  return (
    <>
    <div className='display-items'>
        <h1>Double-Bed</h1>
    <div className='items-shop-detail-display'>
       
     {ans}
     
     </div>
    </div>
    </>
  )
}

export default Doublebed