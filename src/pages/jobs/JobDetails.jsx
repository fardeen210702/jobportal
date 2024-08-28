import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product';
import { useGlobalContext } from '../../contexts/Maincontext';
import Loading from '../../components/Loading';
import Error from '../Error';

function SinglePage() {
  const { jobs, flag } = useGlobalContext()
  const [job, setJob] = useState([])
  const [error, setError] = useState(false);
  const id = useParams()


  const jobById = import.meta.env.VITE_REACT_APP_JOB_BY_ID
  const URL = jobById+`${id.id}`;
  
  async function fetchData(url) {
    try {
      const res = await fetch(url)
      if(!inSuccessRange(res.status)){
        setError(true);
      }
   
      
      const data = await res.json()
      setJob([data])
      console.log(job);
      

    } catch (error) {
      
      
    }
  }

  function inSuccessRange(statusCode){
    if(statusCode > 199 && statusCode < 300){
      return true;
    }
    return false;
  }
  useEffect(() => {
    if (id) {
      fetchData(URL)
    }
  }, [id])

  let prop = "Oops! The Job you're looking for doesn't exist or has been expired "
  return (
    <>
    { error ? <Error prop = {prop} /> : 
    <div className=' w-full flex items-center justify-center '>
      {
        flag ? (
          <div className='w-full h-[100vh] flex justify-center items-center'>
            <Loading />
          </div>
        ) :
          <div className='w-[98%] md:w-[95%] mt-20 md:mt-24 '>

            {
              job.map((el) => {
                return <Product key={el.job_id} {...el} />
              })
            }


          </div>
      }


    </div>

}
    </>
  )
}

export default SinglePage