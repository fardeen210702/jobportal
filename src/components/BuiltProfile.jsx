import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


function BuiltProfile(el) {
    const {Fname , Sname,about , pic , resume , number , skills , email} = el
    const [contact, setContact] = useState(false)
    // const [text, setText] = useState(false)
    
function showContactInfo(){
setContact(!contact)
}



  return (
    <div className='w-full border border-[red] flex justify-center h-[100vh]  lg:justify-start lg:px-6'>
        <div className='realtive w-[98%] sm:w-[70%] lg:w-1/3  mt-20 md:mt-24 border border-gray-500 p-2 lg:rounded-[4px] text-white flex flex-col items-center  '>
            <figure className='w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white my-2'>
                <img src={pic} alt="" />
            </figure>
            <p className='uppercase font-semibold tracking-wide'>{Fname + ' ' + Sname}</p>
            <p onClick={showContactInfo} className='text-[indigo] hover:underline cursor-pointer my-2'>Contact info</p>
            <div className='flex items-start flex-col'>
                <p className='text-[#E45826] font-semibold lg:text-xl'>Skills</p>
                <p className='break-words-wrap w-full text-gray-600' >{skills}</p>
            </div>
            <hr className='w-full border border-gray-600 my-4' />
            
            <div className='flex items-start flex-col'>
                <p className='text-[#E45826] font-semibold lg:text-xl'>About</p>
                <p className='break-words w-full text-gray-600' >{about}</p>
            </div>
            <hr className='w-full border border-gray-600 my-4' />


           <div className='w-full  my-5'> 
           
           <a href={resume} target='_blank' download={Fname}  className='w-[140px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-3 text-xl font-semibold text-white md:text-[white] rounded-sm border-white md:border-[white] border my-4'> resume</a>

           </div>
            { contact && <div className='absolute top-[30%] left-[15%] w-[70%] h-[200px] border-2 rounded-[4px] border-[#ffffff2b] bg-[#0b0c1f]'>
                <div className='p-2 flex flex-col gap-2'>
                <p className='text-3xl cursor-pointer rounded-full border border-white w-min p-1
                hover:border-[#E45826] transition-all duration-700 hover:bg-[white]   hover:text-[#E45826]' onClick={()=>setContact(false)}><RxCross2/></p>
                <div>
                <p className='first-letter:uppercase text-[#E45826] font-semibold'>{Fname + "'s mobile"}</p>
                <p>  {number}</p>
                </div>
                <div>
                <p className='first-letter:uppercase text-[#E45826] font-semibold '>{Fname + "'s email"}</p>

                <p className='w-full break-words'>  {email}</p>
                </div>

                </div>
                
            </div>}
            
            
        </div>
                
        
    </div>
  )
}

export default BuiltProfile