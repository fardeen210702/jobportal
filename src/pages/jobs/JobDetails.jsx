import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product';
import { useGlobalContext } from '../../contexts/Maincontext';
import Loading from '../../components/Loading';

function SinglePage() {
  const { jobs , flag } = useGlobalContext()
  const [job ,setJob] = useState([])
  const id = useParams()
  const URL = `https://job-server-02e1a467bb4c.herokuapp.com/api/v1/job-finder/jserver?jobId=${id.id}`; 
  
  async function fetchData(url){
    try {
        const res  = await fetch(url)
        const data = await res.json()
        // console.log('fetching job data',data);
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
      {
        flag ? (
        <div className='w-full h-[100vh] flex justify-center items-center'>
          <Loading/>
        </div>
      ) :<div className='w-[98%] md:w-[95%] mt-20 md:mt-24 '>

        {
          job.map((el) => {
            return <Product key={el.job_id} {...el} />
          })
        }
       

      </div>
      }
      
    </div>
  )
}

export default SinglePage