import React from 'react'
import profile from '../assets/profile.svg'
import google from '../assets/google.png'
import Form from './Form'
import { useGlobalContext } from '../contexts/Maincontext'

function BuildProfile() {

const {handleScrollToTop} = useGlobalContext()

  return (
    <div onClick={handleScrollToTop} className=' w-[98%] max-w-[1500px] md:w-[94%] lg:w-[95%] flex justify-center md:justify-between py-2 '>

      {/* sticky component */}

      <div className='hidden  md:block sticky top-20 left-0 shadow-sm shadow-slate-300 md:w-[32%] lg:w-[320px] h-[320px] lg:h-[370px] bg-white rounded-sm '>

        <div className='svgprofile w-full mb-1'>
          <figure className='h-[150px] lg:h-[200px] flex justify-center'>
            <img className='h-full' src={profile} alt="" />
          </figure>

        </div>

        <div className=' '>
          {
            ['Create Your Profile and Attract Recruiters', 'Get Instant Notifications for Suggested Positions', 'Discover Your Ideal Job'].map((el, id) => {
              return <div key={id} className='text-sm flex items-start md:px-3 lg:px-6 gap-2 my-2 p-1'>
                <p className='bg-green-400 rounded-full w-[20px] flex justify-center shrink-0 items-center text-white'>✓</p>
                <span>{el}</span>
              </div>
            })
          }

        </div>

      </div>


      {/* form registration */}

      <div className=' sm:w-[500px] sm:items-center md:items-start sm:gap-9  md:w-[64%] xl:w-[70%]  flex flex-col gap-5 p-1 rounded-sm shadow-sm shadow-slate-300 bg-white '>

        {/* create profile */}

        <div className=' flex flex-col px-2 sm:mt-3 md:mt-5 lg:mt-8 md:px-7  '>
          <h1 className='font-semibold tracking-wider text-xl sm:text-2xl sm:tracking-wide text-blue-500 '>Create your profile now!!</h1>
          <p className='text-xs  text-gray-500'>Explore and Apply for Jobs on India’s Leading Job Portal</p>
        </div>


        {/* form creation */}

        <div className='  w-full flex flex-col lg:flex-row '>
          <div>
            <Form />
          </div>

          <div className='w-full  flex flex-col lg:flex-row  lg:h-[300px] lg:px-3 lg:gap-3 xl:gap-14 lg:items-center '>

            <div className='flex lg:flex-col items-center  gap-2 text-sm my-5 lg:px-3     justify-center' >
              <div className='w-[100px] h-0 lg:w-0 lg:h-[120px] md:w-[150px] border border-gray-300'></div>
              <p>or</p>
              <div className='w-[100px] h-0 lg:w-0 lg:h-[120px]   md:w-[150px] border border-gray-300'></div>

            </div>
            <div className='text-sm mb-2 cursor-pointer  lg:p-2  '>
              <p className='flex flex-col items-center font-semibold gap-2'>Continue with
                <span className='rounded-3xl flex gap-2 border py-2 px-3 border-blue-500 w-fit text-blue-500 text-[16px]'>
                  <img src={google} className='w-[20px]' alt="" />  Google</span>
              </p>
            </div>
          </div>
        </div>




      </div>


    </div>
  )
}

export default BuildProfile
