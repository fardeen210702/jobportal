import React, { useEffect, useState } from 'react'
import { FaShoppingBag, FaRegCheckCircle } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useAsyncError } from 'react-router-dom';


function Product(el) {
    const { job_id, job_title, employer_name, employer_logo, job_city, job_country, job_employment_type, job_is_remote, job_required_experience, job_highlights, job_posted_at_datetime_utc, job_required_education, job_required_skills, job_apply_link, employer_website, job_job_title, job_offer_expiration_datetime_utc, job_description } = el

    const [apply, setApply] = useState(false)
    const expirationDate = job_offer_expiration_datetime_utc

    const current_date = new Date().toISOString();


    useEffect(() => {
        // setApply(true && expirationDate > current_date);
        if(expirationDate > current_date){
            setApply(!apply)
        }
    }, [expirationDate])


    return (
        <div className='w-full text-white flex flex-col gap-2 '>

            <div className='bg-[#0b0c1f] flex flex-col gap-3 p-2 '>
                <div className='flex flex-col  '>
                    <figure className='w-[60px] sm:w-[65px] sm:h-[65px] h-[60px]  '>
                        <img src={employer_logo} className='h-full w-full' alt="" />
                    </figure>
                    {job_title.length > 26 ? <h1 className='font-semibold text-xl '> {job_title.substring(0, 26)}...</h1> : <h1 className='font-semibold text-xl  ' >{job_title}</h1>
                    }
                    <div className='flex items-end gap-1'>

                        {
                            employer_name.length > 12 ? <h1 className='text-gray-500 text-lg font-semibold  flex'> {employer_name.substring(0, 10)}... - </h1> : <h1 className='text-gray-500 text-lg font-semibold  flex'> {employer_name} •</h1>
                        }

                        <p className=' font-semibold text-md text-gray-500 lg:text-lg flex '>{job_city} {job_city ? '•' : ''}</p>
                        <p className=' font-semibold text-md text-gray-500 lg:text-lg '>{job_country}</p>
                    </div>

                    <div className='flex flex-col gap-2'>

                        <a href={employer_website} target='_blank' className='text-gray-400 text-sm cursor-pointer font-semibold underline hover:text-blue-600 w-[200px]' > {employer_website}</a>

                        <h1 className='bg-[#1d1f5f54] p-2 font-semibold text-sm text-white w-[170px]  rounded-[4px]' >Job Posted - {new Date(job_posted_at_datetime_utc).toLocaleDateString()}</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex gap-1 lowercase items-center'>
                        <p className='text-2xl text-gray-400' ><FaShoppingBag /> </p>
                        <p className='p-1 text-md font-semibold text-white'>{!job_is_remote ? 'on-site' : job_is_remote} </p> •
                        <p className='p-1 text-md font-semibold text-white'>{job_employment_type}</p>
                        {job_job_title == null ? '' : <p className='p-1 text-md font-semibold text-white' > • {job_job_title}
                        </p>}
                    </div>
                    <div className='flex items-center '>
                        {job_required_experience.experience_mentioned == true ?
                            <>
                                <MdAdminPanelSettings className='text-3xl text-gray-400' />
                                <p className='py-1 text-md font-semibold text-white'> {Math.floor(job_required_experience.experience_mentioned / 12)}+ years experience</p>  </> : ''}


                    </div>

                </div>

                <div className=' w-full my-1 '>
                    <div className='flex gap-3'>
                        {
                            apply ? <a href={job_apply_link} target='_blank' className='w-[120px] bg-[#E45826] p-2 text-sm font-semibold text-[white]  rounded-sm text-center '> Apply </a> : <button disabled className='cursor-not-allowed w-[120px] bg-[#E45826] p-2 text-sm font-semibold text-[white]  rounded-sm text-center hover:bg-orange-400 ' > Apply </button>
                        }

                        <button type='submit' className='w-[120px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[white]  rounded-sm border-[#ffffff79]  border'> Save </button>
                    </div>
                    <div className='my-2'>
                        <h1>
                            <p className='bg-[#1d1f5f54] p-2 font-semibold text-sm text-white w-[170px]  rounded-[4px] flex items-center gap-2'><IoAlertCircleOutline className='text-xl text-blue-500' /> {!apply ? "Job not avaliable" : "" + new Date(expirationDate).toLocaleDateString()}</p>

                        </h1>
                    </div>



                </div>
            </div>

            <div className='bg-[#0b0c1f] flex flex-col gap-3 p-2 '>
                {/* {job_required_skills !== null ? <div className='flex flex-wrap gap-4'>
                    <p className='font-semibold'>Skills</p>

                    {job_required_skills.map((el, id) => {
                        return <p key={id} className='bg-[#25264c] rounded-[4px] py-1 px-2 text-sm text-white'> {el}</p>
                    })}</div> : ''
                } */}

                {
                    job_description && <div className='space-y-2'>
                        <h1 className='font-semibold text-xl '>Job description</h1>
                        {job_description.length > 1500 ? <p className='text-gray-500 hidden md:flex '>{job_description.substring(0, 1500)}...</p> : <p className='text-gray-500 '>{job_description}</p>}
                        {job_description.length > 1500 ? <p className='text-gray-500 flex md:hidden'>{job_description.substring(0, 600)}...</p> : <p className='text-gray-500 '>{job_description}</p>}

                    </div>
                }

                {job_highlights.Responsibilities && <div className='space-y-2'>
                    <h1 className='font-semibold text-xl '>Responsibilities</h1>
                    {job_highlights.Responsibilities.map((el, id) => {
                        return <p className='text-gray-500 ' key={id}>{el}</p>
                    })}
                </div>

                }
                {job_highlights.Qualifications && <div className='space-y-2'>
                    <h1 className='font-semibold text-xl '>Qualifications</h1>
                    {job_highlights.Qualifications.map((el, id) => {
                        return <p className='text-gray-500 ' key={id}>{el}</p>
                    })}
                </div>

                }
                {job_highlights.Benefits && <div className='space-y-2'>
                    <h1 className='font-semibold text-xl '>Benefits</h1>
                    {job_highlights.Benefits.map((el, id) => {
                        return <p className='text-gray-500 ' key={id}>{el}</p>
                    })}
                </div>

                }



            </div>








        </div>

    )
}

export default Product