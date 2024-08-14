import React from 'react'
import Search from './Search'
import { useFiltercontext } from '../contexts/FilterContext';
import { useGlobalContext } from '../contexts/Maincontext';

function Jobsearch({ drag }) {
    const { flag, filteredJobs } = useFiltercontext();
    const { jobs } = useGlobalContext();
    
    

    function handleDrag(item) {
        console.log('dragging');
        let topHeight = 100
        window.scrollTo({
            top: item.current.offsetTop - topHeight,
            behavior: 'smooth'
        })

    }
    return (
        <div className='w-full  flex items-center flex-col gap-4 p-2 lg:p-0'>
            <div className=' w-[98%] md:w-[95%]'>
                <div className='text-white flex flex-wrap gap-2 items-center justify-center bg-[#7EA1FF] rounded-[4px] py-2 '>
                    <h1 className='font-semibold text-center'> Unleash opportunities! Fresh grads or seasoned pros, find your next challenge in our job listings now! </h1>
                    <button className='w-fit  hover:bg-[#4d7ef8] transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[white]  rounded-sm border-[#ffffffd5] md:border-[#ffffff48] border-2 ' onClick={() => handleDrag(drag)} >Explore jobs</button>
                </div>

            </div>

        </div>
    )
}

export default Jobsearch