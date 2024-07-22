import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts/Maincontext';
import Product from '../components/Product';

function SinglePage() {
  const { jobs } = useGlobalContext()
  // console.log(jobs, "global jobs");
  const id = useParams()
  // console.log(id, "parameter id ");




  return (
    <div className=' w-full flex justify-center '>
      <div className='w-[98%] md:w-[95%] mt-20 md:mt-24 '>

        {
          jobs.map((el) => {
            return el.job_id == id.id && <Product key={el.job_id} {...el} />
          })
        }

      </div>
    </div>
  )
}

export default SinglePage