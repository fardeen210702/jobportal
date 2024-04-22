import React from 'react'
import Search from './Search'

function Jobsearch({drag}) {

    function handleDrag(item){
        console.log('dragging');
        let topHeight = 100
        window.scrollTo({
            top: item.current.offsetTop - topHeight,
            behavior:'smooth'
        })

    }
  return (
    <div className='w-full  flex items-center flex-col gap-4'>
        <div className=' w-[98%] md:w-[95%]'>
           <div className='text-white flex flex-wrap gap-2 items-center justify-center bg-[#7EA1FF] rounded-[4px] py-2'>
           <h1 className='font-semibold text-center'> Unleash opportunities! Fresh grads or seasoned pros, find your next challenge in our job listings now! </h1> 
           <button className='w-[100px]  hover:bg-[#93a6d8] transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[white]  rounded-sm border-[#ffffffd5] md:border-[#ffffff48] border-2 ' onClick={()=>handleDrag(drag)} >Explore jobs</button>
           </div>
        
        </div>
        
         <div className='w-[98%] py-2 flex flex-col items-center gap-2'>
            <h1 className='text-xl sm:text-2xl font-semibold text-[#07081c] text'> Get hired with Job Portal!</h1>
            <div className='w-full flex justify-center gap-2 sm:gap-10 '>
                {['100+ Job openings','150+ organisations' , '5LPA avg package'].map((el,id)=>{
                    return <p  key={id} className='text-[#07081c] text-sm sm:text-lg font-semibold text-center '> {el}</p>

                    
                })}
            </div>

        </div>

        <div className='w-full flex justify-center'>
            <div className='w-[98%] sm:w-[60%] lg:w-[45%] lg:p-3 sm:p-2 flex items-center border-[#00000018] border md:shadow-md md:shadow-[#57575711] rounded-[4px] bg-white'>

            <Search/>
            
            </div>
        </div>
        
    </div>
  )
}

export default Jobsearch