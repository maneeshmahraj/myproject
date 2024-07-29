

import React from 'react'
import Business from './Business'

const Pakagecollection = () => {
  return (
    <>
   <div style={{backgroundColor:"rgb(221, 215, 215)",width:"100%"}} className='pkg'>
   <div className='work-home' style={{paddingTop:"70px"}} >
        
        <div className='work-home-img'>
        <div className='text-home'>
            <p>Package Collection</p>
            <span>Explore the most affordable and vast collection
                 of furniture and appliances and create your own package.</span>
                  <div className='item-range-btn2'>
          <button>DISCOVER MORE</button>
          <div className='hr-line2'></div>
       </div>
          </div>
          <div className='text-home'>
            <img src='images/c1.webp' style={{width:"380px",marginLeft:"50px"}} alt='s'/>
          </div >
          <div className='text-home'>
          <img src='images/c2.webp' style={{width:"350px",marginLeft:"100px"}} alt='s'/>
  
          </div>
         
  
        </div>
      </div>
   </div>
   <Business/>
    </>
  )
}

export default Pakagecollection