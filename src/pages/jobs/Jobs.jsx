import React, { useEffect, useRef, useState } from 'react'
import Loading from '../../components/Loading';
import AllJobs from '../../components/AllJobs';
import Jobsearch from '../../components/Jobsearch'
import { useGlobalContext } from '../../contexts/Maincontext';

function Jobs() {
  const drag = useRef(null)
 const {flag} = useGlobalContext()


  
  return (
    <>{
      flag ? (<>
      <div className='h-[100vh] flex justify-center items-center'>

      <Loading/>
      </div>
      </>)
      :
      
      (<><div className='w-full mt-24'>
        <Jobsearch drag={drag}/>
      <div ref={drag}>
      <AllJobs />
  
      </div>
  
      </div></>)
    }
    
    </>
  )
}

export default Jobs