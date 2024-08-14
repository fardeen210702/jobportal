import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../contexts/Maincontext'

function MobileNav({toggle , setToggle}) {
    const{handleScrollToTop} = useGlobalContext()
    return (
        <div className='w-full h-full  flex flex-col gap-10 '>
            <ul className='flex flex-col items-center uppercase  font-semibold text-md cursor-pointer' onClick={()=>setToggle(!toggle)}>
                <Link  to='/home'>
                    <li className='p-3' onClick={handleScrollToTop}>Home</li>
                </Link>
                <Link to='/profile'>
                    <li className='p-3' onClick={handleScrollToTop}>Profile</li>
                </Link>
                <Link  to='/jobs'>
                    <li className='p-3' onClick={handleScrollToTop}>Jobs</li>
                </Link>
                <Link  to='/publishjobs'>
                    <li className='p-3' onClick={handleScrollToTop}>Add Job</li>
                </Link>
                <Link  to='/contact'>
                    <li className='p-3' onClick={handleScrollToTop}>Contact</li>
                </Link>
                <Link  to='/interviewquestions'>
                    <li className='p-3' onClick={handleScrollToTop}>Interview Prep</li>
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