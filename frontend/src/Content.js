

import React from 'react'
import Febrento from './Febrento'

const Content = () => {
  
  return (
    <>
    <div className='content'>
      <div className='heading-promiss'><h1>WE PROMISE</h1></div>
      <div className='icon-promiss'>
        <div className="icon-promiss-item"  style={{borderRight:"1px solid gray"}}>
        <img src='images/p1.jpeg' alt='p' className="icon-promiss-item1" style={{width:"70px",height:"70px"}}/>
       
        <span className='setting-word'>Well-Crafted <br/>Packages</span>
        </div>
        <div className='icon-promiss-item' style={{borderRight:"1px solid gray"}}>
        <img src='images/p2.jpeg' alt='p' className="icon-promiss-item2" style={{width:"70px",height:"70px"}}/>
        <span className='setting-word'>Free Delivery & <br/>installation</span>

        </div>
        <div className='icon-promiss-item' style={{borderRight:"1px solid gray",flexDirection:"column"}}>
        <img src='images/p5.jpeg' alt='p' className="icon-promiss-item3" style={{width:"100px",height:"100px"}}/>

        <p className='setting-word'>Free Yearly <br/>Maintainance</p>
      
        </div>
        <div className='icon-promiss-item' style={{borderRight:"1px solid gray"}}>
        <img src='images/p6.jpeg' alt='p' className="icon-promiss-item4" style={{width:"70px",height:"70px"}}/>

        <p className='setting-word'>Free Yearly <br/>Maintainance</p>

        </div>
        <div className='icon-promiss-item'style={{borderRight:"1px solid gray"}}>
        <img src='images/p3.png' alt='p' className="icon-promiss-item5" style={{width:"70px",height:"70px"}}/>


        <p className='setting-word'>Free Yearly <br/>Maintainance</p>

        </div>
        <div className='icon-promiss-item' style={{flexDirection:"column"}}>
        <img src='images/p7.jpeg' alt='p' className="icon-promiss-item6" style={{width:"70px",height:"70px"}}/>
        
        <p className='setting-word'>Free Yearly <br/>Maintainance</p>
       
        </div>

      </div>
      <div>

      </div>
    </div>
    <Febrento/>
    </>
  )
}

export default Content