
import { MdCurrencyRupee } from "react-icons/md";
import React, { useState } from 'react'
import { BiRupee } from "react-icons/bi";
import {useDispatch, useSelector} from 'react-redux';
import { decreaseqnty,icreaseqnty,removeData } from "./productSlice";

const Cart = () => {
  const cartItems=useSelector((state)=>state.furniture.items);
  const dispatch=useDispatch();
  const [totleAmount,setTotleAmount]=useState(0)
  const [pprice,setPprice]=useState(0);
  let totalprice=0;
  let productprice=0;
  const decreaseItems=(id)=>{
    dispatch(decreaseqnty(id))
   setTotleAmount(totalprice);
   setPprice(productprice);
  }
  const increaseItems=(id)=>{
    dispatch(icreaseqnty(id))
     setTotleAmount(totalprice);
     setPprice(setPprice)
  }
  const removeItems=(id)=>{
      dispatch(removeData(id))
  }
  const ans=cartItems.map((key)=>{
    totalprice+=parseInt(key.price)*key.quentity;
    productprice+=parseInt(key.price)
    return(
      <>
       <div className='cart-meenu'>
          <div className='cart-meenu1'>
          <img src={key.image}/>
          </div>
         <p>Infinite Double Bed with Mattress, Storage and Bookshelves</p>
         <div className='cart-meenu2'>
      
          <h3><MdCurrencyRupee />{key.price}/Month</h3>
        </div>
       <div className="cart-remove" onClick={()=>{removeItems(key.id)}}><button>X</button></div>
       <div className="cart-nav">
       <table>
        <tr>
          <th> Deposit</th>
          <th>Tenure</th>
          <th>Quantity</th>
         

        </tr>
       <tr>
       <td>1800/-</td>
       <td> <select>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>

        </select></td>
        <td ><div className="qnty-item"><button onClick={()=>{decreaseItems(key.id)}}>-</button><span className="qnty">{key.quentity}</span><button onClick={()=>{increaseItems(key.id)}}>+</button></div></td>
       </tr>
       </table>
       </div>
        </div>
       
      </>
    )
  })
  return (
    <>
    <div className='cart'>
       
        <div className='cart-items-dt'>
        <h3>Order summary</h3>
         {ans}
        </div>
        <div className='cart-items-dt1'>
         <h3>Payment Summary</h3>
         <div className='item-sumry'><span>Monthly Rental</span><span><BiRupee />{pprice}/-</span></div>
         <div className='item-sumry'><span>Delivery</span><span style={{color:"green"}}>FREE</span></div>
         <div className='item-sumry'><span>Installation</span><span style={{color:"green"}}>FREE</span></div>
         <div className='item-sumry'><span style={{color:" rgb(26, 5, 5)",fontWeight:"bold"}}>Total Payable : </span><span style={{color:" rgb(26, 5, 5)",fontWeight:"bold"}}><BiRupee />{totalprice}/-</span></div>
         <button className='payment'>Payment</button>
           
        </div>
       
    </div>
    </>
  )
}

export default Cart