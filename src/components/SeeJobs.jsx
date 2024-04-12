import React, { useEffect , useState} from 'react'
import { useGlobalContext } from '../contexts/Maincontext'


// Experimental component for infinite scroll

function SeeJobs() {
    const {jobs} = useGlobalContext()
    const [visibleJobs, setVisibleJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setVisibleJobs(jobs.slice(0,9))
    }, [jobs])

    useEffect(() => {
   
    function handleScroll(){
        if( window.innerHeight  + document.documentElement.scrollTop  +1 >= document.documentElement.scrollHeight){
            loadMoreData()
        }
    }
    window.addEventListener('scroll' , handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);

}, [])
    async function loadMoreData(){
        if(!isLoading){
            setIsLoading(true)
            setTimeout(() => {
                const currentLength = visibleJobs.length;
                const additionalLength = jobs.slice(
                    currentLength,
                    currentLength + 9
                )

                setVisibleJobs(prev=>[...prev , ...additionalLength ])

                setIsLoading(false)
                
            }, 1000);


        }
    }
   

    
    


  return (
    <div className='w-full border border-red-800 flex justify-center'>
        <div className='w-[97%] border border-white p-2'>
            {
                visibleJobs.map((el,id)=>{
                    return <p key={id}>{el.job_title}</p>
                })
            }
        </div>
        
    </div>
  )
}

export default SeeJobs