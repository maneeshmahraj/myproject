

import React from 'react'
import Content from './Content'

const Business = () => {
  return (
    <>
    <div className='work-home'>
        <div className='work-home-heading'>
            <h2>FABRENTO FOR BUSINESS</h2>
            <div className='home-border'></div>
        </div>
      <div className='work-home-img'>
        <div className='text-home'>
          <img src='images/b1.jpg' alt='s'/>
        </div >
        <div className='text-home'>
        <img src='images/b2.jpg' style={{width:"370px"}} alt='s'/>

        </div>
        <div className='text-home'>
          <p>Furniture business</p>
          <span>Are you running a co-living, co-working space and
             need furniture? Fabrento is
             the right place for you. We offer furniture for all kind
              of business in bulk.</span>
                <div className='item-range-btn2'>
        <button>DISCOVER MORE</button>
        <div className='hr-line2'></div>
     </div>
        </div>

      </div>
    </div>
    <Content/>
    </>
  )
}

export default Business