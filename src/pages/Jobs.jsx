import React, { useEffect, useRef, useState } from 'react'
import Loading from '../components/Loading';
import AllJobs from '../components/AllJobs';
import Jobsearch from '../components/Jobsearch'

function Jobs() {
  const drag = useRef(null)
  const [flag,setFlag] = useState(true)


  useEffect(()=>{
let loader =sessionStorage.getItem('loading-page');
if(loader ==='false'){
  setFlag(false)
}else{
  setTimeout(()=>{
    setFlag(false)
    sessionStorage.setItem('loading-page','false')
   },1000)
}

window.addEventListener('beforeunload',()=>{
  sessionStorage.setItem( 'loading-page','true')
})

return ()=>{
  window.removeEventListener('beforeunload',()=>{
    sessionStorage.setItem( 'loading-page','true')
  })
  
}

  
  },[flag])


  
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