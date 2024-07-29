import React, { useEffect } from 'react'
import load from '../assets/load.svg'
import { FaRegBookmark , FaBookmark } from "react-icons/fa6";
import { useGlobalContext } from '../contexts/Maincontext';
import {
    FaShoppingBag,
    FaRegCheckCircle,
    FaCity,
    FaFlag,
  } from "react-icons/fa";
import { IoAlertCircleOutline, IoLocationSharp } from "react-icons/io5";


function Card( el ) {
    const { job_id,
        job_title,
        employer_name,
        employer_logo,
        job_apply_is_direct,
        job_city,
        job_country,
        job_employment_type,
        job_is_remote,
        job_required_experience,
        job_highlights,
        job_posted_at_datetime_utc,
        job_required_education,
        job_required_skills,
        job_apply_link,
        employer_website,
        job_job_title,
        job_offer_expiration_datetime_utc,
        job_description,  } = el
    const {handleScrollToTop} = useGlobalContext()

    let jobType  = job_employment_type.toLowerCase().charAt(0).toUpperCase()+ job_employment_type.slice(1).toLowerCase(); //capitalizing the string


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    
  // converting utc of date //job posting date
  let newDay = new Date(job_posted_at_datetime_utc);
  let year = newDay.getFullYear();
  let month = newDay.getMonth();
 
  let date = newDay.getDate();
  let newDate = date < 10 ? "0" + date : date;

  let job_posted_on = `${newDate} ${months[Number(month)]}, ${year}`;


  //expiration date
  let expDay = new Date(job_offer_expiration_datetime_utc);
  let expYear = expDay.getFullYear();
  let expMonth = expDay.getMonth();

  let expNewDate = expDay.getDate();
  let job_expires_on = `${expNewDate} ${months[Number(expMonth)]},${expYear}`;

  let newExpDate = new Date(job_expires_on);

  let currentDate = new Date();

    return (
        
        <div onClick={handleScrollToTop} className='w-[350px] md:w-[395px] border border-[#e4592635] hover:border-[#E45826] bg-[white] transition-all duration-300 ease-in rounded-[4px]    my-2 text-black'>
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

            <hr className='my-2 border-[1.1px]  border-[#2e2e2e24] ' />


           
            {/* employement details */}
            <div className='flex flex-col px-2 pb-2'>
            <div className="employementdetails  flex flex-wrap  items-center gap-2 my-2">
          {job_is_remote === true && (
            <h1 className="flex items-center  gap-1 text-xs  w-min bg-gray-200  p-2 border border-gray-400 rounded-sm capitalize">
              {" "}
              <IoLocationSharp /> remote
            </h1>
          )}
          {job_country && (
            <h1 className="flex items-center  gap-1 text-xs  w-fit bg-gray-200  p-2 border border-gray-400 rounded-sm capitalize">
              {" "}
              <FaFlag /> {job_country}
            </h1>
          )}
          {job_city && (
            <h1 className="flex items-center  gap-1 text-xs  w-fit bg-gray-200  p-2 border border-gray-400 rounded-sm capitalize">
              {" "}
              <FaCity /> {job_city}
            </h1>
          )}
          {job_employment_type && (
            <h1 className=" w-min bg-gray-200 text-xs  p-2 border border-gray-400 rounded-sm  ">
              {jobType}
            </h1>
          )}

          {job_required_experience.experience_mentioned === true ? (
            <h1 className="bg-gray-200 text-xs  p-2 border border-gray-400 rounded-sm   flex items-center gap-2 capitalize">
              {" "}
              <FaShoppingBag />{" "}
              {job_required_experience.required_experience_in_months / 12} years
            </h1>
          ) : (
            <h1 className="bg-gray-200  p-2 border border-gray-400 rounded-sm  text-xs capitalize">
              {" "}
              fresher
            </h1>
          )}
        </div>

        {/* job post and expire dates */}

        <div className="flex flex-col gap-2 mt-1 mb-3">
          {job_posted_at_datetime_utc && (
            <p className="bg-gray-200  p-2 border border-gray-400 rounded-sm text-xs font-semibold w-fit capitalize">
              Job Posted on : {job_posted_on}
            </p>
          )}
          {job_offer_expiration_datetime_utc && (
            <>
              {currentDate > newExpDate ? (
                <p className="postexp bg-gray-100 text-red-500  text-xs  p-2 border border-gray-200 rounded-sm  font-semibold w-fit capitalize">
                  job not avaliable
                </p>
              ) : (
                <p className="postexp bg-gray-200 text-red-500 text-xs  p-2 rounded-sm  font-semibold border border-gray-400 w-fit capitalize">
                  Job Expires on : {job_expires_on}
                </p>
              )}
            </>
          )}
        </div>
        <button className="w-fit bg-white transition-all duration-300  py-2  px-5 text-xs  font-semibold text-black rounded-sm  border border-[#E45826] hover:bg-[#E45826] hover:text-white">
            Apply
          </button>

          </div>

            {/* <div className='px-3'>
                <div className='w-full flex gap-2 items-center'>
               { job_country || job_city && <h1 className='bg-[#80808045] rounded-[20px] py-1 px-2 text-xs text-gray-500' > {job_city} {job_country ? ',' : ''} {job_country}</h1>}

                    <h1 className='lowercase bg-[#80808045] py-1 px-2 rounded-[20px] text-xs text-gray-500 '> {
                        job_is_remote ? 'remote' : job_employment_type}</h1>


                       { job_required_experience.experience_mentioned == true ?(<h1 className='bg-[#80808045] py-1 px-2 rounded-[20px] text-xs text-gray-500 '>{job_required_experience.required_experience_in_months / 12 + 'years exp...'}</h1>):(<h1 className='bg-[#80808045] py-1 px-2 rounded-[20px] text-xs text-gray-500 '  >{'fresher'}</h1>) }


                        <h1 className=' text-md'> <FaRegBookmark/></h1>
                </div>
                <button type='submit' className='w-[100px]  bg-[white] hover:bg-[#E45826] border border-[#e4592635] rounded-sm transition-all duration-300 hover:text-white p-2 text-xs font-semibold text-[black]    my-4'> APPLY JOB</button>

            </div> */}


        </div>
       
    )
}

export default Card

