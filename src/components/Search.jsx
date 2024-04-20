import React from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <>
        <input type="text " 
         className='flex-1 border-none outline-none bg-transparent placeholder:text-[gray] p-2   rounded-[4px]  text-black  '
         placeholder='job title,keywords or company'
         />
         <button className='text-2xl w-[19%] md:w-[10%]  text-[#646363]  h-full flex justify-center items-center'>< FaSearch/> </button>
         </>
    
  )
}

export default Search