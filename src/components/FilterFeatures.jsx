import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useGlobalContext } from '../contexts/Maincontext';
function FilterFeatures({ setShowFilters }) {
    const {role,experience,location,jobType,handleSubmit , change} = useGlobalContext()


    return (
        <div className='flex flex-col  w-full bg-white rounded-sm p-3     shadow-sm shadow-gray-300  '>


            <div className=' flex  justify-between '>
                <h1 className='flex items-center gap-2 p-2 font-semibold text-lg text-blue-700 '> Filter <FaFilter /></h1>

                <button className='text-2xl p-2 md:hidden ' onClick={() => setShowFilters(false)}> <RxCross1 /></button>
            </div>
            <form action="" className=' flex flex-col gap-3 items-start mt-6 w-full h-full'
            onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-1  font-semibold w-[98%]'>
                    <label htmlFor="">Role : </label>
                    <input className='border border-slate-400 p-2 text-sm font-normal' type="text" placeholder='Enter role'
                        name='role'
                        value={role}
                        onChange={change}
                    />
                </div>
                <div className='flex flex-col gap-1  font-semibold w-[98%]'>
                    <label htmlFor="">Location :  </label>
                    <input className='border border-slate-400 p-2 text-sm font-normal' type="text" placeholder='Enter Location'
                        name='location'
                        value={location}
                        onChange={change}

                    />
                </div>
                <div className='flex flex-col gap-1  font-semibold w-[98%] '>
                    <label htmlFor="">Experience :  </label>
                    <input type="range" min={0} max={20} className='custom-range-slider'
                        name='experience'
                        value={experience}
                        onChange={change}

                        />
                    <p className='font-normal text-xs'>20+ years</p>
                </div>
                <div className='flex flex-col gap-1 w-[98%]'>
                    <label htmlFor="job-type" className='font-semibold'>Job type:</label>
                    <select id="job-type" className='text-sm rounded-sm border border-slate-400 p-2'
                        onChange={change}
                    name='jobType'
                    >
                        <option value="">Select</option>
                        <option value="associate">Associate</option>
                        <option value="contractor">Contractor</option>
                        <option value="fulltime">Fulltime</option>
                    </select>
                </div>

                <div className=' w-full' onClick={() => setShowFilters(false)}>
                    <input type="submit" value={'Apply Filters'} className=' p-2 bg-blue-500 text-white rounded-sm ' />
                </div>
            </form>
        </div>
    )
}

export default FilterFeatures
