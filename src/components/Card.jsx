import React from 'react'
import load from '../assets/load.svg'
import { FaRegBookmark , FaBookmark } from "react-icons/fa6";

function Card({ el }) {
    const { job_title, employer_name, employer_logo, job_city, job_country, job_employment_type, job_is_remote, } = el

    return (
        <div className='w-[285px] md:w-[300px] border border-[#e4592635] hover:border-[#E45826] bg-[#0b0c1f] transition-all duration-300 ease-in     my-2 text-white'>
            <div className='flex justify-between p-3'>
                <figure className='w-[60px] h-[60px] flex items-center'>
                    {employer_logo ? <img src={employer_logo} alt='' className='w-full h-full object-contain' /> : <img src={load} alt="" />}
                </figure>
                <div className='w-[70%]'>
                    <div>
                    {job_title.length >20 ? <h1> {job_title.substring(0,20) }...</h1> : <h1 >{job_title}</h1>
                        
                    }
                    <h1>{employer_name.substring(0, 20)}</h1>

                    </div>
                </div>
            </div>

            <hr className='my-2  border-[#ffffff0d] ' />

            <div className='px-3'>
                <div className='w-full flex gap-2 items-center'>
                <h1 className='bg-[#141535] p-1 text-sm text-gray-500' > {job_city} {job_city ? ',' : ''} {job_country}</h1>

                    <h1 className='lowercase bg-[#141535] p-1 text-sm text-gray-500 '> {
                        job_is_remote ? 'remote' : job_employment_type}</h1>

                        <h1 className=' text-md'> <FaRegBookmark/></h1>
                </div>
                <button type='submit' className='w-[100px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[#ffffff37]  rounded-sm border-[#ffffff0d] md:border-[#ffffff48] border my-4'> APPLY JOB</button>

            </div>


        </div>
    )
}

export default Card

