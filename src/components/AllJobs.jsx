import {useEffect, useState } from 'react'
import { useGlobalContext } from '../contexts/Maincontext'

import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Card from './Card'

function AllJobs() {
    const { jobs } = useGlobalContext();
    const [showJobs, setShowJobs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log(jobs);

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
        <div className='w-full   flex justify-center mt-10 ' >
            <div className='w-[98%]  p-2'>

                <div className='w-full flex flex-wrap justify-center gap-4  '>
                    {
                        showJobs.map((el,id) => {
                            return <div className='flex justify-center ' key={id}  >
                                <Link to={`/job-details/${el.job_id}`}>
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