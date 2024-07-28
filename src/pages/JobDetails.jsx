import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts/Maincontext';
import Product from '../components/Product';

function SinglePage() {
  const { jobs } = useGlobalContext()
  const [job ,setJob] = useState([])
  const id = useParams()
  const URL = `https://job-server-66141ed39513.herokuapp.com/api/v1/job-finder/jserver?jobId=${id.id}`; 
  
  async function fetchData(url){
    try {
        const res  = await fetch(url)
        const data = await res.json()
        console.log('fetching job data',data);
        setJob([data])
  
    }catch (error) {
      }
    }
    useEffect(() => {
      if(id){
        fetchData(URL)
      }
    }, [id])
  
  return (
    <div className=' w-full flex justify-center '>
      <div className='w-[98%] md:w-[95%] mt-20 md:mt-24 '>

        {
          job.map((el) => {
            return <Product key={el.job_id} {...el} />
          })
        }
       

      </div>
    </div>
  )
}

export default SinglePage