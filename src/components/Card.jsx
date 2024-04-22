import React, { useEffect } from 'react'
import load from '../assets/load.svg'
import { FaRegBookmark , FaBookmark } from "react-icons/fa6";
import { useGlobalContext } from '../contexts/Maincontext';

function Card( el ) {
    const { job_title, employer_name, employer_logo, job_city, job_country, job_employment_type, job_is_remote,job_required_experience  } = el
    const {handleScrollToTop} = useGlobalContext()

    useEffect(() => {
      
    }, [])
    

    return (
        
        <div onClick={handleScrollToTop} className='w-[320px] md:w-[395px] border border-[#e4592635] hover:border-[#E45826] bg-[white] transition-all duration-300 ease-in rounded-[4px]    my-2 text-white'>
            <div className='flex justify-between p-3'>
                <figure className='w-[60px] h-[60px] flex items-center'>
                    {employer_logo ? <img src={employer_logo} alt='' className='w-full h-full object-contain' /> : <img src={load} alt="" />}
                </figure>
                <div className='w-[70%]'>
                    <div className='text-black'>
                    {job_title.length >20 ? <h1 className='font-semibold'> {job_title.substring(0,20) }...</h1> : <h1 className='font-semibold' >{job_title}</h1>
                        
                    }
                    <h1>{employer_name.substring(0, 20)}</h1>

                    </div>
                </div>
            </div>

            <hr className='my-2 border  border-[#2e2e2e24] ' />

            <div className='px-3'>
                <div className='w-full flex gap-2 items-center'>
               { job_country || job_city && <h1 className='bg-[#80808045] rounded-[20px] py-1 px-2 text-sm text-gray-500' > {job_city} {job_country ? ',' : ''} {job_country}</h1>}

                    <h1 className='lowercase bg-[#80808045] py-1 px-2 rounded-[20px] text-sm text-gray-500 '> {
                        job_is_remote ? 'remote' : job_employment_type}</h1>
                        <h1 className='bg-[#80808045] py-1 px-2 rounded-[20px] text-sm text-gray-500 '>
                            { job_required_experience.experience_mentioned == true ? Math.floor(job_required_experience.required_experience_in_months / 12) : ''  }years exp...
                        </h1>


                        <h1 className=' text-md'> <FaRegBookmark/></h1>
                </div>
                <button type='submit' className='w-[100px]  bg-[white] hover:bg-[#E45826] border border-[#e4592635] rounded-sm transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[black]    my-4'> APPLY JOB</button>

            </div>


        </div>
       
    )
}

export default Card

