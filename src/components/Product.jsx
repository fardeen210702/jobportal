import React, { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaRegCheckCircle,
  FaCity,
  FaFlag,
} from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import load from "../assets/load.svg";

import { IoAlertCircleOutline, IoLocationSharp } from "react-icons/io5";

function Product(el) {
  const [fullScreen, setFullScreen] = useState(false)
  const {
    job_id,
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
    job_description,

  } = el;
  // console.log(el);

  let newText = el.job_required_skills.replace(/[\[\]"]/g, "");
  let splitText = newText.split(",");

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

  let jobType =
    job_employment_type.toLowerCase().charAt(0).toUpperCase() +
    job_employment_type.slice(1).toLowerCase(); //capitalizing the string

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-col border rounded-sm   py-1 px-3 bg-white  shadow-md">
        <div className="employerdetails">
          <div className="employer flex items-center gap-2">
            <figure className="w-[50px] h-[50px]  ">
              {employer_logo ? (
                <img
                  src={employer_logo}
                  className="h-full w-full object-contain "
                  alt=""
                />
              ) : (
                <img
                  src={load}
                  className="h-full w-full object-contain"
                  alt=""
                />
              )}
            </figure>

            <h1 className="font-bold text-xl text-[#0b0c1f] ">
              {employer_name}
            </h1>
          </div>
        </div>

        <div>
          {/* employer details */}

          {employer_website && (
            <a
              href=""
              target="_blank"
              className=" px-1 underline text-blue-800 font-semibold text-sm"
            >
              Visit Website
            </a>
          )}
          <div className=" hidden md:flex">
            <h1 className="font-semibold text-sm">{job_title}</h1>
          </div>
          <div className="visible md:hidden">
            {job_title.length > 38 ? (
              <h1 className="font-semibold text-sm">
                {job_title.substring(0, 38)}...
              </h1>
            ) : (
              <h1 className="font-semibold text-sm">{job_title}</h1>
            )}
          </div>
        </div>
        {/* location and experience */}
        <div className="employementdetails  flex flex-wrap  items-center gap-2 my-2">
          {job_is_remote === true && (
            <h1 className="flex items-center  gap-1 text-sm  w-min bg-gray-200  p-2 border border-gray-400 rounded-sm capitalize">
              {" "}
              <IoLocationSharp /> remote
            </h1>
          )}
          {job_country && (
            <h1 className="flex items-center  gap-1 text-sm  w-fit bg-gray-200  p-2 border border-gray-400 rounded-sm capitalize">
              {" "}
              <FaFlag /> {job_country}
            </h1>
          )}
          {job_city && (
            <h1 className="flex items-center  gap-1 text-sm  w-fit bg-gray-200  p-2 border border-gray-400 rounded-sm capitalize">
              {" "}
              <FaCity /> {job_city}
            </h1>
          )}
          {job_employment_type && (
            <h1 className=" w-min bg-gray-200 text-sm  p-2 border border-gray-400 rounded-sm  ">
              {jobType}
            </h1>
          )}

          {job_required_experience.experience_mentioned === true ? (
            <h1 className="bg-gray-200 text-sm  p-2 border border-gray-400 rounded-sm   flex items-center gap-2 capitalize">
              {" "}
              <FaShoppingBag />{" "}
              {job_required_experience.required_experience_in_months / 12} years
            </h1>
          ) : (
            <h1 className="bg-gray-200  p-2 border border-gray-400 rounded-sm  text-sm capitalize">
              {" "}
              fresher
            </h1>
          )}
        </div>

        {/* skills */}
        {job_required_skills && (
          <div className="job_required_skills flex-col flex gap-2 my-3 ">
            {" "}
            <p className="font-semibold">Skills</p>
            <div className="flex flex-wrap gap-2">
              {splitText.map((el, id) => {
                return (
                  <p
                    key={id}
                    className="capitalize bg-gray-200 text-sm  p-2 border border-gray-400 rounded-sm "
                  >
                    {el}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {/* job posting and expiration dates */}

        <div className="flex flex-col gap-2 my-3">
          {job_posted_at_datetime_utc && (
            <p className="bg-gray-200  p-2 border border-gray-400 rounded-sm text-sm font-semibold w-fit capitalize">
              Job Posted on : {job_posted_on}
            </p>
          )}
          {job_offer_expiration_datetime_utc && (
            <>
              {currentDate > newExpDate ? (
                <p className="postexp bg-gray-100 text-red-500  text-sm  p-2 border border-gray-200 rounded-sm  font-semibold w-fit capitalize">
                  job not avaliable
                </p>
              ) : (
                <p className="postexp bg-gray-200 text-red-500 text-sm  p-2 rounded-sm  font-semibold border border-gray-400 w-fit capitalize">
                  Job Expires on : {job_expires_on}
                </p>
              )}
            </>
          )}
        </div>

        {/* job apply link */}
        <div className="jobapplication my-3 flex gap-3 items-center ">
          {job_offer_expiration_datetime_utc ? (
            <>
              {newExpDate < currentDate ? (
                <button
                  className=" cursor-not-allowed w-fit border-[white] transition-all duration-300  py-2 px-4 text-sm sm:text-md font-semibold  rounded-sm  border  bg-[#E45826] hover:bg-white hover:border-[#E45826] text-white hover:text-black"
                  disabled
                >
                  Apply Job
                </button>
              ) : (
                <a
                  href={job_apply_link}
                  className="w-fit border-[white] transition-all duration-300  py-2 px-4 text-sm sm:text-md font-semibold  rounded-sm  border  bg-[#E45826] hover:bg-white hover:border-[#E45826] text-white hover:text-black"
                  target="_blank"
                >
                  Apply Job
                </a>
              )}
            </>
          ) : (
            <a
              href={job_apply_link}
              className="w-fit border-[white] transition-all duration-300  py-2 px-4 text-sm sm:text-md font-semibold  rounded-sm  border bg-[#E45826] hover:bg-white hover:border-[#E45826] text-white hover:text-black"
              target="_blank"
            >
              Apply Job
            </a>
          )}
          <button className="w-fit border-[white] transition-all duration-300  py-2 px-4 text-sm sm:text-md font-semibold  rounded-sm  border  bg-[#E45826] hover:bg-white hover:border-[#E45826] text-white hover:text-black">
            Save Job
          </button>
        </div>
      </div>

      {/* job description ,responsibilties , qualifications , benefits */}

      <div className="w-full flex flex-col gap-3 border rounded-sm   py-1 px-3 bg-white  shadow-md">

        {/* job description */}
        <div className="jobsdescriptionw-full ">
          <h1 className="font-semibold  mb-2">Job Description :</h1>
          <div className="pl-5 text-sm md:pr-12">
            {
              job_description && <>
                {
                  job_description.length > 300 ? <div className="">
                  <p>  { !fullScreen ? job_description.substring(0, 500) : job_description}<button onClick={()=>setFullScreen(!fullScreen)}  className="text-gray-500 hover:text-gray-600">{fullScreen ? '...hide' : '...Showmore'}</button></p>
                  
                    </div>
                   :
                 '' 
                    
                }
              </>
            }
          </div>


        </div>

        {/* job responsibilties */}
        <div className="w-full p-1">
          {
            (job_highlights.Responsibilities && job_highlights.Responsibilities.length > 0) && <ul className="pl-5 md:pr-12">
              <h1 className="font-semibold mb-2 -ml-6">Responsibilities :</h1>
              {job_highlights.Responsibilities.map((el, id) => {
                return <li key={id} className="list-disc text-sm ">{el}</li>
              })
              }
            </ul>
          }
        </div>

        {/* job qualifications */}
        <div className="w-full p-1">
          {
            (job_highlights.Qualifications && job_highlights.Qualifications.length > 0) && <ul className="pl-5 md:pr-12">
              <h1 className="font-semibold mb-2 -ml-6">Qualifications :</h1>
              {job_highlights.Qualifications.map((el, id) => {
                return <li key={id} className="list-disc text-sm">{el}</li>
              })
              }
            </ul>
          }
        </div>

        {/* job benfits */}

        <div className="w-full p-1">
          {
            (job_highlights.Benefits && job_highlights.Benefits.length > 0) && <ul className="pl-4 md:pr-12">
              <h1 className="font-semibold mb-2 -ml-6">Benefits:</h1>
              {job_highlights.Benefits.map((el, id) => {
                return <li key={id} className="list-disc text-sm">{el}</li>
              })
              }
            </ul>
          }
        </div>





      </div>
    </div>
  );
}

export default Product;
