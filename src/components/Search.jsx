import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useFiltercontext } from '../contexts/FilterContext';

function Search() {
  const {filters:{text},handleChange ,handleSubmit, filteredJobs , flag} = useFiltercontext()
  return (
    <>
    <form className='flex items-center w-full ' onSubmit={handleSubmit} >

        <input type="text " 
         className='flex-1 border-none outline-none bg-transparent placeholder:text-[gray] p-2   rounded-[4px]  text-black  '
         placeholder='job title,keywords or company'
         name='text'
         value={text}
         onChange={handleChange}
         
         />

         {/* <input type='submit' className=''/> */}
         <button type='submit' className=' sm:text-2xl opacity-50 w-[19%] md:w-[10%]  text-[#646363]  h-full flex justify-center items-center'> <FaSearch/> </button>
        </form>

        
       
         </>
    
  )
}

export default Search