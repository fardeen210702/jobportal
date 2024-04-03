import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import MobileNav from './MobileNav';

function Header() {
    const [toggle, setToggle] = useState(false)
    function handleToggle(){
        setToggle(!toggle)
    }
  return (

    <>
    {/* mobile navbar */}
    <div className='border border-red-500 p-3 flex justify-between items-center relative'>
        <div className='flex gap-1 items-center'>
            <figure className='w-[40px]'>
                <img src={logo} alt=""  />
            </figure>
            <h1 className='font-bold text-xl'>JOBPORTAL</h1>
        </div>
        <div onClick={handleToggle}> 
            <span className='text-2xl font-bold'>{toggle ? <RxCross2/> : <IoMenu/> } 
            </span>
        </div>

        <div className={ toggle ? `absolute left-0 top-[100%] w-full h-screen border-2 border-gray-900 transition-all duration-300` : 'absolute -left-[101%] w-full h-screen transition-all duration-300 top-[100%] '}>
        <MobileNav/>
        </div>
        
    </div>
    </>

  )
}

export default Header