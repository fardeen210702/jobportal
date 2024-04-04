import React from 'react'
import profile from '../assets/interview.svg'
import { Link } from 'react-router-dom'


function ProfileComp() {
  return (
    <div className='w-[98%] md:w-[95%] lg:h-[400px] xl:h-[490px] rounded-[4px] my-6  shadow-sm shadow-black bg-[#0b0c1f]  flex flex-col md:flex-row items-center lg:justify-around '>
        <div className='w-full md:w-1/2 p-2 flex flex-col gap-5  '>
            <p className='text-[white] font-bold  text-2xl lg:text-3xl'>Profile</p>
            <h1 className='text-3xl lg:text-4xl font-bold text-[#E45826]'> BUILD A STRONG PROFILE TO STANDOUT </h1>
            <p className='text-gray-700 text-lg lg:text-xl'> Make a strong impression infront of Employers by creating extraordinary profiles </p>
            <Link to='/profile'>
            <button className='w-[140px] hover:bg-[#E45826] transition-all duration-300 hover:text-black p-3 text-xl font-semibold text-white rounded-sm border-[#E45826] border'> Build Profile</button>
            </Link>
        </div>

        <div className='hidden md:block w-1/2 lg:w-[470px] xl:w-[550px] '>
        <figure className='w-full'>
            <img src={profile} alt="" />
        </figure>
        </div>
        
        
    </div>
  )
}

export default ProfileComp