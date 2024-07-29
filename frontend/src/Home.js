  
  import React from 'react'
  import { IoBed } from "react-icons/io5";

import { GiSofa } from "react-icons/gi";

import Festivesale from './Festivesale';


  const Home = () => {
    return (
      <>
      <div className='slider'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={"../images/silider1.webp"} className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src={"../images/silider2.webp"} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={"../images/silider1.webp"} className="d-block w-100" />
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
        
       
       
<div className='icons-home'>
<div className='nav-layout3'>
         <ul>
            <li> <IoBed />
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DOUBLE-BED</p>
            </li>

           <li> <img src="images/chare.jpeg" style={{height:"55px"}}/>
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> WORK OFFICE</p>
           </li>
           <li><img src="images/wardrobe.jpeg" style={{height:"55px"}}/>
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> BARDROBE</p>
           </li>
           <li><img src="images/workhome.png" className='w-home'/>
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}>WORK-HOME</p>
           </li>
           
           <li><img src="images/dresser.jpeg" style={{height:"55px"}}/>
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DRESSER</p>
           </li>
           <li><img src="images/studytable.png" style={{height:"55px"}}/>
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> STUDY-TABLE</p>
           </li>
           <li><GiSofa />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"8px"}}> SOFA</p>
         </li>

        <li> <img src="images/dinning.jpeg" style={{height:"60px"}}/>
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DINIG-TABLE</p>
        </li>
        <li><img src="images/home.jpeg" style={{height:"55px"}}/>
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> PACKAGES</p>
        </li>
       
        
           </ul>
         </div>

      </div>
      <Festivesale/>
      </>
    )
  }
  
  export default Home