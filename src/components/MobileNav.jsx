import React from 'react'
import { Link } from 'react-router-dom'

function MobileNav({toggle , setToggle}) {
    return (
        <div className='w-full h-full  flex flex-col gap-10  text-[#07081c]'>
            <ul className='flex flex-col items-center uppercase  font-semibold text-md cursor-pointer' onClick={()=>setToggle(!toggle)}>
                <Link  to='/home'>
                    <li className='p-3'>Home</li>
                </Link>
                <Link to='/profile'>
                    <li className='p-3'>Profile</li>
                </Link>
                <Link  to='/jobs'>
                    <li className='p-3'>Jobs</li>
                </Link>
                <Link  to='/publishjobs'>
                    <li className='p-3'>Add Job</li>
                </Link>
                <Link  to='/contact'>
                    <li className='p-3'>Contact</li>
                </Link>
                <Link  to='/interviewquestions'>
                    <li className='p-3'>Interview Prep</li>
                </Link>
                


            </ul>
            {/* <div className=' flex justify-center uppercase  font-semibold text-md cursor-pointer' >
                <div className='flex gap-3'>
                    <h1 className='border border-black rounded py-2 px-4'>LOGIN </h1>
                    <h1 className='border bg-[#E45826] text-[#fef2ee]  rounded py-2 px-4'>Singin  </h1>
                </div>
            </div> */}
        </div>
    )
}

export default MobileNav    