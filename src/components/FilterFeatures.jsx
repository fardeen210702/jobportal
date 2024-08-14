import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
function FilterFeatures({setShowFilters}) {
    return (
        <div className='flex flex-col  w-full bg-white rounded-sm p-2  shadow-sm shadow-gray-300  '>


            <div className=' flex  justify-between '>
                <h1 className='flex items-center gap-2 p-2 font-semibold text-lg text-blue-700 '> Filter <FaFilter /></h1>

                <button className='text-2xl p-2 md:hidden ' onClick={() => setShowFilters(false)}> <RxCross1  /></button>
            </div>
            <form action="" className=' flex flex-col gap-3 items-start mt-6 w-full h-full'>
                <div className='flex flex-col gap-1  font-semibold w-[98%]'>
                    <label htmlFor="">Role : </label>
                    <input className='border border-slate-700 p-2 text-sm font-normal' type="text" placeholder='Enter role' />
                </div>
                <div className='flex flex-col gap-1  font-semibold w-[98%]'>
                    <label htmlFor="">Location :  </label>
                    <input className='border border-slate-700 p-2 text-sm font-normal' type="text" placeholder='Enter Location' />
                </div>
                <div className='flex flex-col gap-1  font-semibold w-[98%] sm:w-[50%]'>
                    <label htmlFor="">Experience :  </label>
                    <input type="range" />
                    <p className='font-normal text-xs'>20+ years</p>
                </div>
                <div className='flex flex-col gap-1    w-[98%]'>
                    <label htmlFor="" className='font-semibold '>Job type :  </label>
                    <div className='text-sm flex gap-1 items-center'>
                        <input type="checkbox" /><span>Associate</span>
                    </div>
                    <div className='text-sm flex gap-1 items-center'>
                        <input type="checkbox" /><span>Contractor</span>
                    </div>
                    <div className='text-sm flex gap-1 items-center'>
                        <input type="checkbox" /><span>Fulltime</span>
                    </div>

                </div>

                <div className=' w-full' onClick={()=>setShowFilters(false)}>
                    <input type="submit" value={'Apply Filters'} className=' p-2 bg-blue-500 text-white rounded-sm ' />
                </div>
            </form>
        </div>
    )
}

export default FilterFeatures
