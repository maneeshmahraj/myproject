

import React from 'react'
import { BsSendArrowUp } from "react-icons/bs";

const Footer = () => {

  return (
    <div className='product-cell3'>
    <div className='heading-promiss3'><h2>STAY WITH US</h2>
    <p>Find out early about all upcoming promotions and new products releases with our newsletter.</p>
    </div>
    <div className='input-box'>
       <div className='input-box2'>
       <input type='email' placeholder='enter your email address here'/>
       <div ><BsSendArrowUp style={{color:" rgb(236, 77, 77)",fontSize:"30px",cursor:"pointer"}} /></div>
       </div>
     
    </div>
    <div className='footer-box'>

    <div className='footer-img'>
      <img src='images/footerimg.webp' />
      <p>Let our legacy pick the best<br/> renting solution for your<br/> exclusive needs</p>
     </div>
    <div className='footer-box2'>
    <div className='footer-box1'>

<ul>
  <li><a href='#' style={{color:"black"}}><h6>ABOUT</h6></a></li>
  <li><a href='#'>Company</a></li>
  <li><a href='#'> FAQ</a></li>
  <li><a href='#'> Career</a></li>
  <li><a href='#'>Contact Us</a></li>     
</ul>   

</div>
<div className='footer-box1'>

<ul>
  <li><a href='#' style={{color:"black"}}><h6>FABRENTO</h6></a></li>
  <li><a href='#'>Top Picks</a></li>
  <li><a href='#'>Packages</a></li>
  <li><a href='#'> Bedroom</a></li>
  <li><a href='#'>Livingroom</a></li> 
  <li><a href='#'>Dining</a></li>
  <li><a href='#'> Kids Furniture</a></li>
      
</ul>   

</div>
<div className='footer-box1' >

<ul style={{paddingTop:"40px"}}>
  
  <li><a href='#'>Premium Range</a></li>
  <li><a href='#'>Appliance</a></li>
  <li><a href='#'> Office Furniture</a></li>
  <li><a href='#'>Art & Accessories</a></li> 
  <li><a href='#'>Offer</a></li>
  <li><a href='#'> Refer A Friend</a></li>
      
</ul>   

</div>
<div className='footer-box1'>

<ul>
  <li><a href='#' style={{color:"black"}}><h6>USEFUL INFORMATION</h6></a></li>
  <li><a href='#'>Terms & Conditions</a></li>
  <li><a href='#'>Privacy Policy</a></li>
  <li><a href='#'> Sitemap</a></li>
      
</ul>   

</div>
    </div>
    </div>
  
   </div>
  )
}

export default Footer;