import React from 'react'
import badge from '../assets/badge.svg'

function Landingpage() {
  return (
    <div className='w-full  my-8 flex flex-col items-center ' >
        <div className='w-[300px] sm:w-[350px]  flex flex-col items-center text-[#07081c]'>
            <figure className='shape w-[70px] sm:w-[80px] md:w-[100px] '>
                <img src={badge} className='' alt="" />
            </figure>
            <h1 className='text text-2xl font-semibold sm:text-3xl  md:text-4xl '> Why Choose Us!!</h1>
        </div>
        </div>
  )
}

export default Landingpage