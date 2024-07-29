
import React from 'react'
import Pakagecollection from './Pakagecollection'

const Workhome = () => {
  return (
   <>
    <div className='work-home'>
        <div className='work-home-heading'>
            <h2>WORK FROM HOME</h2>
            <div className='home-border'></div>
        </div>
      <div className='work-home-img'>
        <div className='text-home'>
          <img src='images/s1.jpg' alt='s'/>
        </div >
        <div className='text-home'>
        <img src='images/s2.webp' alt='s'/>

        </div>
        <div className='text-home'>
          <p>Work From Home</p>
          <span>Explore the most affordable and vast collection of 
                 furniture and workstations to make your Work From 
                Home Experience better.</span>
                <div className='item-range-btn2'>
        <button>DISCOVER MORE</button>
        <div className='hr-line2'></div>
     </div>
        </div>

      </div>
    </div>
    <Pakagecollection/>
   </>
  )
}

export default Workhome