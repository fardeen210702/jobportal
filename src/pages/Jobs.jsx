import React, { useRef } from 'react'

import AllJobs from '../components/AllJobs'
import Jobsearch from '../components/Jobsearch'

function Jobs() {
  const drag = useRef(null)
  
  return (
    <div className='w-full mt-24'>
      <Jobsearch drag={drag}/>


    <div ref={drag}>
    <AllJobs />
    </div>

    </div>
  )
}

export default Jobs