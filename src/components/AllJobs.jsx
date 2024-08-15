import { useEffect, useReducer, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { FaFilter } from "react-icons/fa6";
import Card from './Card'
import FilterFeatures from './FilterFeatures';
import reducer from '../contexts/FilterJobsReducer';

function AllJobs() {
    const [isLoading, setIsLoading] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const pageNumberRef = useRef(pageNumber)
    const initialState = {
        allJobs:[]
    }

    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        pageNumberRef.current = pageNumber
    },[pageNumber])

    const url = `https://job-server-02e1a467bb4c.herokuapp.com/api/v1/job-finder/jserver/all-jobs?pageNo=${pageNumber}&pageSize=10`
    async function fetchdata(url) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch({type:'FILTERALLJOBS',payload: data})
            console.log(state.allJobs);
            console.log(pageNumberRef.current);
            
            
        } catch (error) {
            // console.log('error', error);
        }
    }
    useEffect(() => {
        fetchdata(url)
    }, [url])





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

    }, [state.allJobs])

    function loadMoreData() {
        if (!isLoading) {
            setIsLoading(true);
            let setTime = setTimeout(() => {
                const pageSize = 10; // Adjust this to match the pageSize you use in the API
                if (state.allJobs.length % pageSize === 0) {
                    setPageNumber(prev => prev + 1);
                }
                setIsLoading(false)

            }, 1000);
        }
    }


    return (
        <div className='w-full   flex justify-center my-5 ' >
            <div className='w-[98%]  lg:w-[95%]  flex flex-col md:flex-row md:gap-2'>
                <div className='md:h-full w-[98%] md:w-[250px] lg:w-[300px] xl:w-[380px]  h-fit flex justify-center    '>
                    {
                        !showFilters ? <button onClick={() => setShowFilters(!showFilters)} className='md:hidden border-[1.2px] border-slate-600  px-3 bg-gray-300 flex items-center gap-2 mb-5   '> Filter <FaFilter /></button> : ''
                    }


                    <div className={`${showFilters ? 'flex ' : 'hidden'}  h-fit w-full md:flex md:sticky md:top-24  p-2 md:p-0 `}>
                        <FilterFeatures setShowFilters={setShowFilters} />

                    </div>
                </div>


                <div className='w-full flex flex-wrap justify-center gap-4   '>
                    {
                        state.allJobs.map((el, id) => {
                            return <div className='flex justify-center ' key={id}  >
                                
                                <Link to={`/jobs/${el.job_id}`}>
                                    <Card {...el} />
                                </Link>
                            </div>
                        })
                    }


                    {isLoading && <div className='w-full flex justify-center'>
                        <Loading />

                    </div>}
                </div>

            </div>

        </div>
    )
}

export default AllJobs