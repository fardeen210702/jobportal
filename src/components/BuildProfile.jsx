import React, {useState} from 'react'
import logo from '../assets/logo2.svg'

function BuildProfile({onSubmit})  {

    const [data, setData] = useState({
      Fname: '',
      Sname: '',
      number: '',
      birth: '',
      email: '',
      skills: '',
      about:'',
      pic: '',
      resume: '',
    })
    // const [list, setList] = useState([])
  
    function handleChange(e) {
      let name = e.target.name
      let value = e.target.value
      setData({
        ...data,
        [name]: value
      })
  
    }
    function handleImageChange(e) {
      setData({
        ...data,
        pic: URL.createObjectURL(e.target.files[0]),
      })
    }
    function handleResumeChange(e) {
      setData({
        ...data,
        resume: URL.createObjectURL(e.target.files[0]),
      })
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      onSubmit(data)
     
    }
    return (
      <div className='w-full  flex justify-center md:h-[100vh]  '>
        <div className='w-full mt-24 sm:mt-0  bg-[#0b0c1f]  sm:flex sm:flex-col sm:items-center '>
          <div className=' hidden sm:flex  bg-[#E45826]  w-full h-[330px] md:h-[400px] lg:h-[420px] xl:h-[600px] p-3  justify-center items-center  '>
            <div className='flex '>
            <img src={logo} className='w-[60px]' alt="" />
            <h1 className='font-bold text-xl sm:text-2xl px-2 text-[#0b0c1f] mt-4'>JOB PORTAL</h1>
            </div>
  
          </div>
  
  
          <div className='sm:-mt-28 md:-mt-20 xl:-mt-20 2xl:-mt-24 rounded-[4px] rounded-t-[30px] md:overflow-y-scroll sm:w-[60%]   md:w-[45%] lg:w-[30%] 2xl:w-[28%] md:bg-[white] bg-[#0b0c1f]  '>
            <form action=" " className='star flex flex-col items-center w-full gap-4 font-semibold' onSubmit={handleSubmit} autoComplete='off'>
              <div className='my-2 w-full '>
                <h1 className=' capitalize text2 text-2xl text-[#E45826]  font-sans sm:text-3xl md:mx-1 text-center  '>Start building profile</h1>
              </div>
              <div className=' w-full  sm:pl-16 md:pl-10  gap-4 flex flex-col items-center '>
                <div className='flex flex-col pl-2 w-full  '>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="name">First name</label>
                  <input className='p-2 w-[90%]  sm:w-[80%] rounded-sm   border border-[#E45826]  ' type="text" name="Fname" id="name" value={data.Fname} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="Sname">Second name</label>
                  <input className='p-2 w-[90%] sm:w-[80%] rounded-sm border border-[#E45826]  ' type="text" name="Sname" id="Sname" value={data.Snamename} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="">Select image</label>
                  <input className='p-2 w-[90%] sm:w-[80%] rounded-sm text-white md:text-[#0f0f0faa]  ' type="file" name="file" id="file" onChange={handleImageChange} />
                </div>  
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="number">Mobile number</label>
                  <input className='p-2 w-[90%] sm:w-[80%] rounded-sm border border-[#E45826]  ' type="number" name="number" id="number" value={data.number} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="email">Email</label>
                  <input className='p-2 w-[90%] sm:w-[80%] rounded-sm border border-[#E45826]  ' type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="birth">Date of birth</label>
                  <input className='p-2 w-[90%] sm:w-[80%] rounded-sm border border-[#E45826]  ' type="date" name="birth" id="birth" value={data.birth} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="">resume</label>
                  <input className='p-2 border border-red-800 w-[90%] sm:w-[80%] rounded-sm   text-white  md:text-[#0f0f0faa]' type="file" name="file" id="file"
                    onChange={handleResumeChange} />
                </div>

                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="text">skills</label>
                  <textarea className='w-[90%] sm:w-[80%] rounded-sm border border-[#E45826] ' rows='4' type="text" name="skills" id="text" value={data.skills} placeholder='dont use these characters {-,/:#}' onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' uppercase text-white  md:text-[#0f0f0faa] ' htmlFor="about">About</label>
                  <textarea className='w-[90%] sm:w-[80%] rounded-sm border border-[#E45826] ' rows='4' type="text" name="about" id="about" value={data.about} placeholder='explain yourself ' onChange={handleChange} />
                </div>
                <div className='w-full px-2'>
                  <button type='submit' className='w-[140px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-3 text-xl font-semibold text-[#000000]  rounded-sm border-white md:border-[#E45826] border my-4'> Build Profile</button>
                </div>
              </div>
  
  
  
            </form>
  
          </div>
  
  
  
  
        </div>
       
  
      </div>
    )
  }

export default BuildProfile