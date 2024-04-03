import React from 'react'

function MobileNav() {
  return (
    <div className='w-full h-full  flex flex-col gap-10 bg-[#FFF0EB]'>
    <ul className='flex flex-col  font-semibold text-2xl cursor-pointer'>
        <li className=' hover:bg-[#FFB49A]  p-3'>Home</li>
        <li className=' hover:bg-[#FFB49A]  p-3'>about</li>
        <li className=' hover:bg-[#FFB49A]  p-3'>Jobs</li>
        <li className=' hover:bg-[#FFB49A]  p-3'>Contact</li>
        
    </ul>
    <div>
            <h1>LOGIN | SIGNUP</h1>
        <p>DARKTHEME</p>
    </div>
    </div>
  )
}

export default MobileNav