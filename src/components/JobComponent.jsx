import React from 'react'
import job from '../assets/job.svg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../contexts/Maincontext'


function JobComponent() {
  const {handleScrollToTop} = useGlobalContext()

    return (
        <div onClick={handleScrollToTop}  className='w-[98%] md:w-[95%] lg:h-[400px] xl:h-[490px] rounded-[4px] my-6 shadow-lg shadow-[#65646411] bg-[white]  flex flex-col md:flex-row items-center lg:justify-around '>

            <div className='hidden md:block w-1/2 lg:w-[420px] xl:w-[510px] '>
                <figure className='w-full'>
                    <img src={job} alt="" />
                </figure>
            </div>
            <div className='w-full md:w-1/2 p-2 flex flex-col gap-5  '>
                <p className='text-[#07081c] font-bold  text-xl sm:text-2xl lg:text-3xl'> Explore Jobs</p>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#E45826] uppercase'> Unlock a World of Diverse Opportunities </h1>
                <p className='text-gray-700 text-md sm:text-xl lg:text-xl'> Unleash your potential, explore diverse opportunities, and navigate towards success with confidence</p>
                <Link to='/jobs'>
                    <button className='w-fit hover:bg-[#E45826] transition-all duration-300 hover:text-white py-2 px-3 text-xl font-semibold text-black rounded-sm border-[#E45826] border'> Search Jobs</button>
                </Link>
            </div>




        </div>
    )
}

export default JobComponent