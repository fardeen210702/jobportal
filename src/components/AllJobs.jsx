import React from 'react'
import { useGlobalContext } from '../contexts/Maincontext'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import Card from './Card'

function AllJobs() {

    const{jobs} = useGlobalContext()
  return (
    <div className='w-full  flex justify-center mt-10 '>
        <div className='w-[98%]  p-2'> 
        
        <div className='w-full flex flex-wrap justify-center gap-4  '>
           {
            jobs.map((el,index)=>{
                return <Link to={`/singlepage/${index}`} key={index}>
                    <div className='flex justify-center '>

                    <Card el = {{...el}}/>
                    </div>
                </Link>
            })
           }
            

        </div>


        </div>
        
    </div>
  )
}

export default AllJobs