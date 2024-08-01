import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <div className='admin-page'>
      <div className='admin-logo1'>
        <div className='admin-log'>
         <img src='images/mk.jpg' />
        </div>
        <div className='admin-log1'>
          <p>User Name: <span>maneesh budholiya</span></p>
          <p>mobile:<span>9140688969</span></p>
          <button>Edit profile</button>
        </div>
      </div>
      <div className='admin-logo2'>
        <div className='admin-sidewar'>
          <ul>
            <li><Link to="/insert" className='link'>Data Insert</Link></li>
            <li><Link to="display" className='link'>Data Display</Link></li>
            <li><Link to="update" className='link'>Data Update</Link></li>
            <li><Link to="ordered" className='link'>Ordered Items</Link></li>

          </ul>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Admin