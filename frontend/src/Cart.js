
import { MdCurrencyRupee } from "react-icons/md";
import React from 'react'
import { BiRupee } from "react-icons/bi";
const Cart = () => {
  return (
    <>
    <div className='cart'>
       
        <div className='cart-items-dt'>
        <h3>Order summary</h3>
        <div className='cart-meenu'>
          <div className='cart-meenu1'>
          <img src='image1/img1.jpg'/>
          </div>
         <p>Infinite Double Bed with Mattress, Storage and Bookshelves</p>
         <div className='cart-meenu2'>
      
          <h3><MdCurrencyRupee />899/Month</h3>
        </div>
       <div className="cart-remove"><button>X</button></div>
        </div>
        </div>
        <div className='cart-items-dt1'>
         <h3>Payment Summary</h3>
         <div className='item-sumry'><span>Monthly Rental</span><span><BiRupee />899/-</span></div>
         <div className='item-sumry'><span>Delivery</span><span style={{color:"green"}}>FREE</span></div>
         <div className='item-sumry'><span>Installation</span><span style={{color:"green"}}>FREE</span></div>
         <div className='item-sumry'><span style={{color:" rgb(26, 5, 5)",fontWeight:"bold"}}>Total Payable : </span><span style={{color:" rgb(26, 5, 5)",fontWeight:"bold"}}><BiRupee />1800/-</span></div>
         <button className='payment'>Payment</button>
           
        </div>
       
    </div>
    </>
  )
}

export default Cart