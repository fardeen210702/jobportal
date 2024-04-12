import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../contexts/Maincontext'

function JobLandingPage() {
    const { companyName } = useGlobalContext()
  
 



    return (
        <div className='w-full flex justify-center'>

        <div className='flex flex-wrap w-[95%] border border-red-600 gap-4'>
            {
                companyName.map((el, id) => {
                    return <div key={id} className='flex w-[60px] h-[60px] border border-green-500'>
                                <figure className={`w-full h-full object-contain `}>
                                    <img src={el} className='' alt="" />
                                </figure>
                    </div>
                })
            }
        </div>

            </div>

    )
}

export default JobLandingPage