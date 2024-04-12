import React from 'react'
import JobLandingPage from '../components/JobLandingPage'
import JobLandingPage2 from '../components/JobLandingPage2'
import SeeJobs from '../components/SeeJobs'
import AllJobs from '../components/AllJobs'

function Jobs() {
  return (
    <div className='w-full  mt-28'>
    <JobLandingPage2/>
    <AllJobs/>

    </div>
  )
}

export default Jobs