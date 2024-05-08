import React from 'react'
import { Link } from 'react-router-dom'
import qandA from '../assets/qandA.svg'

function QuestionsComponent() {
  return (
    <div className='w-[98%] md:w-[95%] lg:h-[400px] xl:h-[490px] rounded-[4px] my-6 shadow-lg shadow-[#65646411] bg-[white]   flex flex-col md:flex-row items-center lg:justify-around '>
    <div className='w-full md:w-1/2 p-2 flex flex-col gap-5  '>
        <p className='text-[#07081c] font-bold  text-2xl lg:text-3xl'>Interview Prep</p>
        <h1 className='text-2xl lg:text-3xl font-bold text-[#E45826] uppercase'> Preparing for Success: Strategies for Nailing Your Interview </h1>
        <p className='text-gray-700 text-lg lg:text-xl'> Equip yourself with knowledge, practice, and confidence to conquer your upcoming interview and land your dream opportunity </p>
        <Link to='/profile'>
        <button className='w-[190px] hover:bg-[#E45826] transition-all duration-300 hover:text-white p-3 text-xl font-semibold text-black rounded-sm border-[#E45826] border'> Start preparation</button>
        </Link>
    </div>

    <div className='hidden md:block w-1/2 lg:w-[420px] xl:w-[510px] '>
    <figure className='w-full'>
        <img src={qandA} alt="" />
    </figure>
    </div>
    
    
</div>
  )
}

export default QuestionsComponent