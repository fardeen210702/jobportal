import React from 'react'
import Search from './Search'
import worldmap from '../assets/worldmap.png'
function JobLandingPage2() {
  return (
    <div className='w-full relative'>
      <div className='w-full text-center'>
        <img src={worldmap} className=' orange-map absolute top-0 left-0 w-full sm:h-[500px] object-fill' alt="" />
        <h1 className='text-[#E45826] text-xl font-bold sm:text-3xl lg:text-4xl'> Searching for your dream job ?</h1>
      </div>
    
      <div className='w-full text-center'>
        <h1 className='text-[#ffffff5b] text-md font-semibold  sm:text-3xl lg:text-4xl'> Here are 1000+ recommended jobs for You!</h1>
      </div>
      <div className='w-full flex text-white'>
        <h1> 200+ openings</h1>
        <h1> 4 LPA avg package</h1>
      </div>
      <div className='w-full flex justify-center my-2 '>
        <div className='w-[70%] flex  rounded-sm md:justify-center   '>
          <Search />
        </div>
      </div>

    </div>
  )
}

export default JobLandingPage2