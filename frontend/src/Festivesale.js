
import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import Workhome from './Workhome';
const Festivesale = () => {
  return (
   <>
    <div className='product-cell'>
      <div className='fabrento'>
       <div className='heading-feb'>
       <h2>FESTIVE SALE FROM <br/>
       <span style={{color:"red"}}>FABRENTO</span></h2>
       </div>
      </div>
  
  <div style={{display:"block"}}>
    <div className='item-range'>
      <span>
      Here's a wide range of the most popular furnitures from Fabrento, offered at discounted prices.</span>
     </div>
     <div className='item-range-btn'>
        <button>DISCOVER MORE</button>
        <div className='hr-line'></div>
     </div>
    
    </div>
    <div className='items-shop-furneeture'>
      <div className='items-shop-detail'>
        <div className='items-shop-detail1'>
          <img src='images/img1.jpg' />
          <span>
          Infinite Double Bed with Mattress, Storage and Bookshelves
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>1999</span></p>
          <h3><MdCurrencyRupee />1899/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img3.jpg' />
          <span>
          Avena King Size Double Bed with Mattress And Side Table
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>999</span></p>
          <h3><MdCurrencyRupee />899/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img2.jpg' />
          <span>
          Nuan Three Seater Sofa
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>999</span></p>
          <h3><MdCurrencyRupee />899/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img4.jpg' />
          <span>
          Otio Dining Table
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>949</span></p>
          <h3><MdCurrencyRupee />849/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img5.jpg' />
          <span>
          Paragon 3+1+1 Sofa Set
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>1499</span></p>
          <h3><MdCurrencyRupee />1399/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img6.jpg' />
          <span>
          Amber sofa (3 Seater , Beige)
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>649</span></p>
          <h3><MdCurrencyRupee />549/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img7.jpg' />
          <span>
          Essen Three Seater Sofa
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>999</span></p>
          <h3><MdCurrencyRupee />899/Month</h3>
        </div>
        <div className='items-shop-detail1'>
          <img src='images/img8.jpg' />
          <span>
          Nuan 5 Seater Sofa Set With Centre Table
          </span>
          <p><MdCurrencyRupee /><span style={{fontSize:"15px"}} className='rupey'>999</span></p>
          <h3><MdCurrencyRupee />899/Month</h3>
        </div>
       
      </div>
     </div>
 
    </div>
   <Workhome/>
   </>
  )
}

export default Festivesale