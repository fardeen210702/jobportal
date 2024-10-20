import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useGlobalContext } from "../../contexts/Maincontext";
import { getJobs } from "../JobUtils/JobsUtil";
function FilterFeatures({ setShowFilters }) {
  const { role, experience, location, jobType, handleSubmit, change, filtered, setFiltered, setFilteredSearchURL } = useGlobalContext();
  const {jobs} = useGlobalContext();
  const [remote, setRemote] = useState(false);

  const [filterJobsQuery, setFilterJobsQuery] = useState({
    jobExperience:0,
    query:'',
    employmentType:'',
    postedOn:'',
    skills:'',
    company:'',
  }) 


  const FILTERED_JOB_BASE_URL = import.meta.env.VITE_REACT_APP_FILTER_JOBS;

  const getFilteredJobs = async (e) => {
    e.preventDefault()

    let query = FILTERED_JOB_BASE_URL;
    query += "remote=" + remote;

    if(filterJobsQuery.query != undefined && filterJobsQuery.query != null && filterJobsQuery.query != ''){
      query += "&query="+filterJobsQuery.query;
    }

    if(filterJobsQuery.jobExperience != undefined && filterJobsQuery.jobExperience != null && filterJobsQuery.jobExperience != ''){
      query += "&experience="+filterJobsQuery.jobExperience;
     
    }

    if(filterJobsQuery.postedOn != undefined && filterJobsQuery.postedOn != null && filterJobsQuery.postedOn != ''){
      query += "&posted-on="+filterJobsQuery.postedOn;
    }

    if(filterJobsQuery.skills != undefined && filterJobsQuery.skills != null && filterJobsQuery.skills != ''){
      query += "&skills="+filterJobsQuery.skills;
    }
    
    if(filterJobsQuery.company != company && filterJobsQuery.company != null && filterJobsQuery.company != ''){
      query += "&company="+filterJobsQuery.company;
    }

    if(filterJobsQuery.employmentType != undefined && filterJobsQuery.employmentType != null && filterJobsQuery.employmentType != ''){
      query += "&employmentType="+filterJobsQuery.employmentType;
    }
    setFiltered(!filtered);
    setFilteredSearchURL(query);

    // const response = await getJobs(FILTERED_JOB_BASE_URL , query);
    // console.log(response);
    
    // return response;
  }

  function handleChange(e){
    let {name,value} = e.target;
    setFilterJobsQuery((filterJobsQuery)=>({
      ...filterJobsQuery,
      [name]:value
    }))
  }

  const handleRemoteJob = (e) =>{
    if(e.target.value === 'ONSITE'  || e.target.value === 'HYBRID'){
      setRemote(false);
    }else{
      setRemote(true);
    }
  }


  const filterJobs = () => {};
  return (
    <div className="flex flex-col  w-full bg-white rounded-sm p-4 shadow-sm shadow-gray-300  ">
      <div className=" flex  justify-between ">
        <h1 className="flex items-center gap-2 p-2 font-semibold text-lg text-blue-500 ">
          {" "}
          Filter <FaFilter />
        </h1>

        <button
          className="text-2xl p-2 md:hidden "
          onClick={() => setShowFilters(false)}
        >
          {" "}
          <RxCross1 />
        </button>
      </div>
      <form
        action=""
        className=" flex flex-col gap-3 items-start mt-6 w-full h-full"
        // onSubmit={getFilteredJobs}
      >
        <div className="flex flex-col gap-1  font-semibold w-[98%]">
          <label htmlFor="">Role : </label>
          <input
            className="border border-slate-400 p-2 text-sm font-normal"
            type="text"
            placeholder="Enter role"
            name="query"
            value={filterJobsQuery.query}
            onChange={handleChange}
          />
        </div>
        {/* <div className="flex flex-col gap-1  font-semibold w-[98%]">
          <label htmlFor="">Location : </label>
          <input
            className="border border-slate-400 p-2 text-sm font-normal"
            type="text"
            placeholder="Enter Location"
            name="location"
            value={location}
            onChange={change}
          />
        </div> */}
        <div className="flex flex-col gap-1  font-semibold w-[98%] ">
          <label htmlFor="">Experience : </label>
          <input
            type="range"
            min="0"
            max="20"  
            name="jobExperience"
            value={filterJobsQuery.jobExperience}
            onChange={handleChange}
            className="w-full appearance-none h-2 bg-gray-300 rounded-lg cursor-pointer"
            style={{
              background: `linear-gradient(to right, #4CAF50 ${
                filterJobsQuery.jobExperience * 5
              }%, #ddd ${filterJobsQuery.jobExperience * 5}%)`,
            }}
          />
          <p className="font-normal text-xs">{filterJobsQuery.jobExperience} + yrs exp</p>
        </div>
        <div className="flex flex-col gap-1 w-[98%]">
          <label htmlFor="employment-type" className="font-semibold">
            Employment type:
          </label>

          <select 
            id="employment-type"
            className="text-sm rounded-sm border border-slate-400 p-2"
            onChange={handleChange}
            name="employmentType"
            value={filterJobsQuery.employmentType}
            style={{ cursor: "pointer" }} >
            <option value="">Select</option>
          {
            ['INTERN' , 'PARTTIME', 'CONTRACTOR', 'FULLTIME' ].map((empType,id)=>{
              return <option key={id} value={empType}>{empType} </option>
            })
          }
          </select>
        </div>

        <div className="flex flex-col gap-1 w-[98%]">
          <label htmlFor="job-posted-on" className="font-semibold">
            Job Posted On:
          </label>

          <select
            id="job-posted-on"
            className="text-sm rounded-sm border border-slate-400 p-2"
            onChange={handleChange}
            name="postedOn"
            value={filterJobsQuery.postedOn}
            style={{ cursor: "pointer" }}
          >
            <option value="">Select</option>
            <option value="all">ALL</option>
            <option value="today">TODAY</option>
            <option value="last3days">Last 3 days</option>
            <option value="last7days">Last Week</option>
            <option value="month">Last Month</option>
          </select>
        </div>



        <div className="flex flex-col gap-1 w-[98%]">
          <label htmlFor="required-skills" className="font-semibold">
            Job Skills:
          </label>
          <input
            id="required-skills"
            className="border border-slate-400 p-2 text-sm font-normal"
            type="text"
            placeholder="Skills "
            name="skills"
            value={filterJobsQuery.skills}
            onChange={handleChange}
          />

        </div>


        <div className="flex flex-col gap-1 w-[98%]">
          <label htmlFor="remoteJob" className="font-semibold">
            Remote Job:
          </label>
          <select
            className="border border-slate-400 p-2 text-sm font-normal"
            type="radio"
            placeholder="Skills "
            name="remote"
            onChange={handleRemoteJob}
          >
            <option value="">SELECT</option>
            {
            ['REMOTE' , 'ONSITE', 'HYBRID' ].map((remoteJob,id)=>{
              return <option key={id} value={remoteJob}>{remoteJob} </option>
            })
          }


          </select>

        </div>


        <div className="flex flex-col gap-1 w-[98%]">
          <label htmlFor="company" className="font-semibold">
            Company:
          </label>
          <input
            id="company"
            className="border border-slate-400 p-2 text-sm font-normal"
            type="text"
            placeholder="Company"
            name="company"
            value={filterJobsQuery.company}
            onChange={handleChange}
          />

        </div>




        <div className=" w-full" onClick={() => setShowFilters(false)}>
          <input
            type="submit"
            value={"Apply Filters"}
            className=" p-2 font-semibold bg-blue-500 text-white rounded-sm text-sm tracking-wide "
            onClick={getFilteredJobs}
            style={{ cursor: "pointer" }}
          />
        </div>
      </form>
    </div>
  );
}

export default FilterFeatures;
