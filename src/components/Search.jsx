import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useFiltercontext } from '../contexts/FilterContext';

function Search() {
  const {filters:{text},handleChange , filteredJobs} = useFiltercontext()
  return (
    <>
    <div className='flex items-center w-full relative'>

        <input type="text " 
         className='flex-1 border-none outline-none bg-transparent placeholder:text-[gray] p-2   rounded-[4px]  text-black  '
         placeholder='job title,keywords or company'
         name='text'
         value={text}
         onChange={handleChange}
        
         />
         <button className=' text-2xl w-[19%] md:w-[10%]  text-[#646363]  h-full flex justify-center items-center'>< FaSearch/> </button>
         { text.length > 0 ? <div className=' h-[500px] overflow-y-scroll w-full p-3 bg-black  absolute top-[150%] left-0 text-white'>
          { filteredJobs.map((el,id) =>{
            return <div key={id} className='w-full border-b border-[#52515151] my-1'>
              <p>{el.job_title}</p>
            </div>
          })

          }


         </div> :''
          
        }
        </div>
         </>
    
  )
}

export default Search