import { useEffect, useState } from 'react'
import { useGlobalContext } from '../contexts/Maincontext'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { FaFilter } from "react-icons/fa6";
import Card from './Card'
import FilterFeatures from './FilterFeatures';


function AllJobs() {
    const { jobs } = useGlobalContext();
    const [showJobs, setShowJobs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    // console.log(jobs);

    useEffect(() => {

        setShowJobs(jobs.slice(0, 9));
    }, [jobs])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        function handleScroll() {
            if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
                loadMoreData()
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [showJobs])

    function loadMoreData() {
        if (!isLoading) {
            setIsLoading(true);
            let setTime = setTimeout(() => {
                const jobsLength = showJobs.length;
                const additionalJobLength = jobs.slice(
                    jobsLength,
                    jobsLength + 9
                )
                setShowJobs((prev) => [...prev, ...additionalJobLength])
                setIsLoading(false)

            }, 1000);
        }
    }
    return (
        <div className='w-full   flex justify-center my-5 ' >
            <div className='w-[98%]  lg:w-[95%]  flex flex-col md:flex-row md:gap-2'>
                <div className='md:h-full w-[98%] md:w-[250px] lg:w-[300px] xl:w-[380px]  h-fit flex justify-center    '>
                    {
                        !showFilters ?<button onClick={()=>setShowFilters(!showFilters)} className='md:hidden border-[1.2px] border-slate-600  px-3 bg-gray-300 flex items-center gap-2 mb-5   '> Filter <FaFilter/></button>  : ''
                    }
                    

                    <div className={`${showFilters ? 'flex ' : 'hidden' }  h-fit w-full md:flex md:sticky md:top-24  p-2 md:p-0 `}>
                        <FilterFeatures setShowFilters = {setShowFilters}/>

                    </div>
                </div>


                <div className='w-full flex flex-wrap justify-center gap-4   '>
                    {
                        showJobs.map((el, id) => {
                            return <div className='flex justify-center ' key={id}  >
                                <Link to={`/jobs/${el.job_id}`}>
                                    <Card {...el} />
                                </Link>
                            </div>
                        })
                    }


                </div>
                {isLoading && <div className='w-full flex justify-center'>
                    <Loading />

                </div>}
            </div>

        </div>
    )
}

export default AllJobs