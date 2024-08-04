
import React, { useEffect, useState } from 'react'
import { IoBed } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { GiSofa } from "react-icons/gi";
import { FaToiletPortable } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { Link, Outlet, useNavigate } from 'react-router-dom';
const username=localStorage.getItem("username")
const email=localStorage.getItem("email")
const Layout = () => {

    const [isShow,setIsShow]=useState(false);
    const [isShow2,setIsShow2]=useState(false);
    const [sideWar,setSideWar]=useState(false)
    const [admin,setAdmin]=useState(false);
    const [list,setList]=useState(false)
    const navigate=useNavigate();

    const handleMouseOver=()=>{
         setIsShow(!isShow);
     setIsShow2(false)

    }
    const handleClick=()=>{
        setSideWar(true);
    }
    const handleMouseOver2=()=>{
        setIsShow2(!isShow2);
        setIsShow(false)

   }
   const handleMove=()=>
   {
    setIsShow(false)
   }
   const handleMove2=()=>
    {
     setIsShow2(false)
    }

    const handleClose=()=>{
        setSideWar(false)
    }
    const handleOver=()=>{
        setList(true);
  }
  const handleOut=()=>{
    setList(false)


  }
  const handleAdmin=()=>{
      navigate("/admin")
  }
  const hadleLogout=()=>{
    localStorage.clear();
    navigate("/home")
  }
  useEffect(()=>{
   if(username=="maneesh budholiya" && email=="mb124969@gmail.com"){
    setAdmin(true)
    

   }
  },[username])
  return (
   <>
   <nav>
   <div style={{width:"100%"}}>
    <div className='navbar'>
        <div className='nav-logo'>
        <div className='nav-logo1'>
        <img src='images\nav-fab-Logo.svg'/>
        </div>
       <div className='product-area'> <select>
            <option>DEHLI-NCR</option>
            <option>Mumbai</option>
        </select>
        </div>
        </div>
        <div className='nav-layout'>
            <ul>
                
                <li onMouseOver={handleMouseOver}><Link to="home"  className='lik'>BEDROOM</Link></li>
                 <li onMouseOver={handleMouseOver2}>LIVING ROOM</li>
                 <li onMouseOver={handleMouseOver2}>MORE CATEGORIES</li>
                  <li><Link to="login" className='lik'>LOGIN</Link></li>

            </ul>
        </div>
      
      <div className='nav-icon-right'>
     
            <ul>
                <li ><FaSearch /></li>
                 <li><FaCartArrowDown /></li>
                  <li><IoNotifications /></li>
                  <li><HiBars3BottomLeft onClick={handleClick} /></li>
                  <li onClick={hadleLogout} className='logout' style={{color:"purple",paddingTop:"10px"}}>logout</li>

            </ul>
      
        </div> 
    </div>
    </div>
   </nav>
   {isShow? <div className='bedroom-icons' onMouseLeave={handleMove}>
      
      <div className='nav-layout2'>
      <ul>
         <li > <Link to="/doublebed" className='lnk-nav'><IoBed /></Link>
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DOUBLE-BED</p>
         </li>

        <li> 
        <Link to="/singlebed" className='lnk-nav'> <IoBedOutline /></Link>

        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> SINGLE-BED</p>
        </li>
        <li>
        <Link to="/bardrobe" className='lnk-nav'> <img src="images/wardrobe.jpeg" style={{height:"55px"}}/></Link>
           
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> BARDROBE</p>
        </li>
        <li>
        <Link to="/dresser" className='lnk-nav'><img src="images/dresser.jpeg" style={{height:"55px"}}/></Link>
            
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DRESSER</p>
        </li>
        <li>
        <Link to="/studytable" className='lnk-nav'> <img src="images/studytable.png" style={{height:"55px"}}/></Link>
           
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> STUDY-TABLE</p>
        </li>
        </ul>
      </div>
         </div>:''
      
        
     }
       {isShow2? <div className='bedroom-icons' onMouseLeave={handleMove2}>
   
   <div className='nav-layout2'>
   <ul>
      <li><GiSofa />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"8px"}}> SOFA</p>
      </li>

     <li> <img src="images/dinning.jpeg" style={{height:"60px"}}/>
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}> DINIG-TABLE</p>
     </li>
     <li> <img src="images/chare.jpeg" style={{height:"55px"}}/>
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}> COPHY TABLE</p>
     </li>
     <li><FaToiletPortable />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}>STORAGE</p>
     </li>
     <li><img src="images/dresser.jpeg" style={{height:"55px"}}/>
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}> DRESSER</p>
     </li>
    
     </ul>
   </div>
      </div>:''
   
     
  }
  {
    sideWar? <div className='sideWar'>
    <div className='close-menu'>
    <IoMdClose  className='cls' onClick={handleClose}/>
    </div>
    <div className='sidewar-about'>
        <p className='sidewar-about1'>REFER A FRIEND</p>
        <p className='sidewar-about2'>FAQ</p>
        <p className='sidewar-about3'>CONTACT US</p>

        <hr color='black' size="2" style={{margin:"50px 0px"}}/>

    </div>
   
    <div className='need'>
        <p className='need-help' style={{color:"black"}}>NEED HELP?</p>
        <p className='need-help' style={{fontSize:"40px"}}>< CiMobile3 style={{color:"red"}}/>
        <span style={{fontSize:"13px",marginLeft:"5px"}}>9555186811/ 9140688969</span>
        </p>
        <p className='need-help' ><TfiEmail style={{color:"red"}}/>
        <span style={{fontSize:"13px" ,marginLeft:"10px"}}>mb124969@gmail.com</span>
        </p>

        <hr color='black' size="2" style={{margin:"-50px 0px"}}/>
    </div>
    <div className="follw">
    <p  style={{color:"black"}}>FOLLOW US ON</p>
    <div className='follw-icon'>
        <div className='fb-icon'>
        <FaFacebookF />
        </div>
        <div >
        <CiInstagram style={{marginLeft:"5px",fontSize:"25px"}}/>
        </div>
    </div>
    </div>
</div>:''
  }
   {admin? <div className='admin'>
        <span onMouseOver={handleOver}>AD</span>
       </div>:""}
     {
         list?  <div className='drop-list' onMouseLeave={handleOut}>
         <ul>
           <li onClick={handleAdmin} style={{cursor:"pointer"}}>Admin</li>
           <li onClick={hadleLogout}  style={{cursor:"pointer"}}>logout</li>           
         </ul>
        </div>:""
     }
<Outlet/>
   </>
  )
}

export default Layout