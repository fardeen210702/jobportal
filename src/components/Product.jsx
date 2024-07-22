import React, { useEffect, useState } from 'react'
import { FaShoppingBag, FaRegCheckCircle, FaCity, FaFlag } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import load from '../assets/load.svg'

import { IoAlertCircleOutline, IoLocationSharp } from "react-icons/io5";


function Product(el) {
    const { job_id, job_title, employer_name, employer_logo, job_apply_is_direct, job_city, job_country, job_employment_type, job_is_remote, job_required_experience, job_highlights, job_posted_at_datetime_utc, job_required_education, job_required_skills, job_apply_link, employer_website, job_job_title, job_offer_expiration_datetime_utc, job_description } = el
    console.log(el);


    let newText = job_required_skills.replace(/[\[\]"]/g, '')
    let splitText = newText.split(',')

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // converting utc of date //job posting date
    let newDay = new Date(job_posted_at_datetime_utc)
    let year = newDay.getFullYear();
    let month = newDay.getMonth()
    console.log(typeof month);


    // let newMonth = month < 10 ? '0'+month : month;


    let date = newDay.getDate()
    let newDate = date < 10 ? '0' + date : date;

    let job_posted_on = `${newDate} ${months[Number(month)]}, ${year}`;



    //expiration date
    let expDay = new Date(job_offer_expiration_datetime_utc)
    let expYear = expDay.getFullYear();
    let expMonth = expDay.getMonth()

    let expNewDate = expDay.getDate()
    let job_expires_on = `${expNewDate} ${months[Number(expMonth)]},${expYear}`;
    console.log(job_expires_on);

    let newExpDate = new Date(job_expires_on)
    console.log(newExpDate);

    let currentDate = new Date();








    return (<>
        <div className='w-full flex flex-col border   py-1 px-3 bg-white  shadow-md'>
            <div className="employerdetails">
                <div className='employer flex items-center gap-2'>

                    <figure className='w-[50px] h-[50px]  '>
                        {employer_logo ? <img src={employer_logo} className='h-full w-full object-contain ' alt="" /> : <img src={load} className='h-full w-full object-contain' alt="" />}

                    </figure>

                    <h1 className='font-bold text-xl text-[#0b0c1f] '>{employer_name}</h1>
                </div>
            </div>

            <div>
                {/* employer details */}

                {employer_website && <h1 className='underline text-blue-800 font-semibold'>{employer_website}</h1>}

                {
                    job_title.length > 38 ? <h1 className='font-semibold'>{job_title.substring(0, 38)}...</h1> : <h1 className='font-semibold'>{job_title}</h1>

                }

            </div>
            {/* location and experience */}
            <div className='employementdetails  flex flex-wrap  items-center gap-2 my-2'>

                {
                    job_is_remote === true && (<h1 className='flex items-center font-semibold gap-1  w-min bg-gray-200  p-2 border border-gray-400 rounded-md capitalize'> <IoLocationSharp /> remote</h1>)

                }
                {
                    job_country && <h1 className='flex items-center font-semibold gap-1  w-fit bg-gray-200  p-2 border border-gray-400 rounded-md capitalize'> <FaFlag /> {job_country}</h1>
                }
                {
                    job_city && <h1 className='flex items-center font-semibold gap-1  w-fit bg-gray-200  p-2 border border-gray-400 rounded-md capitalize'> <FaCity /> {job_city}</h1>
                }
                {
                    job_employment_type && <h1 className=' w-min bg-gray-200  p-2 border border-gray-400 rounded-md lowercase font-semibold  '>{job_employment_type}</h1>
                }

                {
                    job_required_experience.experience_mentioned === true ? <h1 className='bg-gray-200  p-2 border border-gray-400 rounded-md  font-semibold flex items-center gap-2 capitalize'> <FaShoppingBag /> {(job_required_experience.required_experience_in_months / 12)}    years</h1> : <h1 className='bg-gray-200  p-2 border border-gray-400 rounded-md  font-semibold capitalize'> fresher</h1>
                }
            </div>


            {/* skills */}
            {
                job_required_skills && <div className="job_required_skills flex-col flex gap-2 my-3 "> <p className='font-semibold'>Skills</p>
                    <div className='flex flex-wrap gap-2'>
                        {splitText.map((el, id) => {
                            return <p key={id} className='capitalize bg-gray-200  p-2 border border-gray-400 rounded-md font-semibold'>{el}</p>
                        })}</div>
                </div>

            }

            {/* job posting and expiration dates */}

            <div className='flex flex-col gap-2 my-3'>
                {
                    job_posted_at_datetime_utc && <p className='bg-gray-200  p-2 border border-gray-400 rounded-md  font-semibold w-fit capitalize' >Job Posted on : {job_posted_on}</p>
                }
                {
                    job_offer_expiration_datetime_utc && <>
                        {currentDate > newExpDate ? <p className='postexp bg-gray-100 text-red-500   p-2 border border-gray-200 rounded-md  font-semibold w-fit capitalize'>job not avaliable</p>
                            : <p className='postexp bg-gray-200 text-red-500   p-2 rounded-md  font-semibold border border-gray-400 w-fit capitalize'>Job Expires on {job_expires_on}</p>

                        }
                    </>

                }



            </div>

            {/* job apply link */}
            <div className='jobapplication my-3 flex gap-3'>
                {
                    job_offer_expiration_datetime_utc ? <>
                        { newExpDate < currentDate ? (<button className='cursor-not-allowed w-fit hover:bg-white bg-[#E45826] transition-all duration-300 hover:text-black py-2  px-5 text-lg font-semibold text-gray-200 rounded-md border-gray-400 border hover:border-[#E45826]'  disabled>Apply</button>)
                        : 
                        (<a href={job_apply_link} className='w-fit hover:bg-white bg-[#E45826] transition-all duration-300 hover:text-black py-2  px-5 text-lg font-semibold text-gray-200 rounded-md border-gray-400 border hover:border-[#E45826]'  target='_blank'>Apply Job</a>)
                        }
                    </> :(<a href={job_apply_link} className='w-fit hover:bg-white bg-[#E45826] transition-all duration-300 hover:text-black py-2  px-5 text-lg font-semibold text-gray-200 rounded-md border-gray-400 border hover:border-[#E45826]' target='_blank'>Apply Job</a>)

                }
                <button className='w-fit hover:bg-white bg-[#E45826] transition-all duration-300 hover:text-black py-2  px-5 text-lg font-semibold text-gray-200 rounded-md border-gray-400 border hover:border-[#E45826]'> Save Job</button>

            </div>







        </div>


    </>

    )
}

export default Product


// <div className='w-full text-white flex flex-col gap-2 '>

// <div className='bg-[#0b0c1f] flex flex-col gap-3 p-2 '>
//     <div className='flex flex-col  '>
//         <figure className='w-[60px] sm:w-[65px] sm:h-[65px] h-[60px]  '>
//             <img src={employer_logo} className='h-full w-full' alt="" />
//         </figure>
//         {job_title.length > 26 ? <h1 className='font-semibold text-xl '> {job_title.substring(0, 26)}...</h1> : <h1 className='font-semibold text-xl  ' >{job_title}</h1>
//         }
//         <div className='flex items-end gap-1'>

//             {
//                 employer_name.length > 12 ? <h1 className='text-gray-500 text-lg font-semibold  flex'> {employer_name.substring(0, 10)}... - </h1> : <h1 className='text-gray-500 text-lg font-semibold  flex'> {employer_name} •</h1>
//             }

//             <p className=' font-semibold text-md text-gray-500 lg:text-lg flex '>{job_city} {job_city ? '•' : ''}</p>
//             <p className=' font-semibold text-md text-gray-500 lg:text-lg '>{job_country}</p>
//         </div>

//         <div className='flex flex-col gap-2'>

//             <a href={employer_website} target='_blank' className='text-gray-400 text-sm cursor-pointer font-semibold underline hover:text-blue-600 w-[200px]' > {employer_website}</a>

//             <h1 className='bg-[#1d1f5f54] p-2 font-semibold text-sm text-white w-[170px]  rounded-[4px]' >Job Posted - {new Date(job_posted_at_datetime_utc).toLocaleDateString()}</h1>
//         </div>
//     </div>

//     <div className='flex flex-col gap-1'>
//         <div className='flex gap-1 lowercase items-center'>
//             <p className='text-2xl text-gray-400' ><FaShoppingBag /> </p>
//             <p className='p-1 text-md font-semibold text-white'>{!job_is_remote ? 'on-site' : job_is_remote} </p> •
//             <p className='p-1 text-md font-semibold text-white'>{job_employment_type}</p>
//             {job_job_title == null ? '' : <p className='p-1 text-md font-semibold text-white' > • {job_job_title}
//             </p>}
//         </div>
//         <div className='flex items-center '>
//             {job_required_experience.experience_mentioned == true ?
//                 <>
//                     <MdAdminPanelSettings className='text-3xl text-gray-400' />
//                     <p className='py-1 text-md font-semibold text-white'> {Math.floor(job_required_experience.experience_mentioned / 12)}+ years experience</p>  </> : ''}


//         </div>

//     </div>

//     <div className=' w-full my-1 '>
//         <div className='flex gap-3'>
//             {
//                 apply ? <a href={job_apply_link} target='_blank' className='w-[120px] bg-[#E45826] p-2 text-sm font-semibold text-[white]  rounded-md text-center '> Apply </a> : <button disabled className='cursor-not-allowed w-[120px] bg-[#E45826] p-2 text-sm font-semibold text-[white]  rounded-md text-center hover:bg-orange-400 ' > Apply </button>
//             }

//             <button type='submit' className='w-[120px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[white]  rounded-md border-[#ffffff79]  border'> Save </button>
//         </div>
//         <div className='my-2'>
//             <h1>
//                 <p className='bg-[#1d1f5f54] p-2 font-semibold text-sm text-white w-[170px]  rounded-[4px] flex items-center gap-2'><IoAlertCircleOutline className='text-xl text-blue-500' /> {!apply ? "Job not avaliable" : "" + new Date(expirationDate).toLocaleDateString()}</p>

//             </h1>
//         </div>



//     </div>
// </div>

// <div className='bg-[#0b0c1f] flex flex-col gap-3 p-2 '>
//     {/* {job_required_skills !== null ? <div className='flex flex-wrap gap-4'>
//         <p className='font-semibold'>Skills</p>

//         {job_required_skills.map((el, id) => {
//             return <p key={id} className='bg-[#25264c] rounded-[4px] py-1 px-2 text-sm text-white'> {el}</p>
//         })}</div> : ''
//     } */}

//     {
//         job_description && <div className='space-y-2'>
//             <h1 className='font-semibold text-xl '>Job description</h1>
//             {job_description.length > 1500 ? <p className='text-gray-500 hidden md:flex '>{job_description.substring(0, 1500)}...</p> : <p className='text-gray-500 '>{job_description}</p>}
//             {job_description.length > 1500 ? <p className='text-gray-500 flex md:hidden'>{job_description.substring(0, 600)}...</p> : <p className='text-gray-500 '>{job_description}</p>}

//         </div>
//     }

//     {job_highlights.Responsibilities && <div className='space-y-2'>
//         <h1 className='font-semibold text-xl '>Responsibilities</h1>
//         {job_highlights.Responsibilities.map((el, id) => {
//             return <p className='text-gray-500 ' key={id}>{el}</p>
//         })}
//     </div>

//     }
//     {job_highlights.Qualifications && <div className='space-y-2'>
//         <h1 className='font-semibold text-xl '>Qualifications</h1>
//         {job_highlights.Qualifications.map((el, id) => {
//             return <p className='text-gray-500 ' key={id}>{el}</p>
//         })}
//     </div>

//     }
//     {job_highlights.Benefits && <div className='space-y-2'>
//         <h1 className='font-semibold text-xl '>Benefits</h1>
//         {job_highlights.Benefits.map((el, id) => {
//             return <p className='text-gray-500 ' key={id}>{el}</p>
//         })}
//     </div>

//     }



// </div>








// </div>





// http://localhost:5173/job-details/oFPyhlXCo-2n3JrJAAAAAA==