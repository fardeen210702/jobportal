import React, {useState} from 'react'

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
        <div className='w-[98%] md:w-[95%]  bg-[#0b0c1f] mt-24 md:flex md:justify-between '>
          <div className=' hidden md:block  w-[48%] p-3   '>
            <h1 className='font-bold text-xl lg:text-2xl px-2 text-[#E45826]'> LETS BUILD A STRONG PROFILE TO IMPRESS RECRUITERS AND STAND OUT</h1>
  
            <div className=' w-full   px-2 lg:px-3  '>
              <ul className='    flex flex-col gap-3 '>
                {
                  ['Create a profile that reflects who you are.', 'Match the requirements of the job with your profile.', 'Highlight skills and experiences relevant to the job.', ' Ensure the provided contact information is correct.', 'Search for your dream jobs on our website.'].map((el, id) => {
                    return <li className='text-md font-semibold text-[white] lg:text-lg lg:font-bold' key={id}>{el}</li>
                  })
                }
              </ul>
  
            </div>
  
  
          </div>
  
  
          <div className=' md:overflow-y-scroll  md:w-[55%] md:bg-[white] bg-[#0b0c1f]  '>
            <form action=" " className=' flex flex-col items-center w-full gap-4 font-semibold' onSubmit={handleSubmit} autoComplete='off'>
              <div className='my-2 '>
                <h1 className=' text2 text-2xl text-[rgb(228,88,38)] md:text-[#0b0c1f] font-semibold sm:text-3xl md:mx-1  '>Start building profile</h1>
              </div>
              <div className=' w-full md:w-full lg:w-[80%] sm:w-[50%]  gap-4 flex flex-col items-center '>
                <div className='flex flex-col pl-2 w-full '>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="name">First name</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm   md:border  md:border-black ' type="text" name="Fname" id="name" value={data.Fname} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="Sname">Second name</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm md:border  md:border-black ' type="text" name="Sname" id="Sname" value={data.Snamename} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="">Select image</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm text-white md:text-[#0b0c1f] ' type="file" name="file" id="file" onChange={handleImageChange} />
                </div>  
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="number">Mobile number</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm md:border  md:border-black ' type="number" name="number" id="number" value={data.number} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="email">Email</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm md:border  md:border-black ' type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="birth">Date of birth</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm md:border  md:border-black ' type="date" name="birth" id="birth" value={data.birth} onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="">resume</label>
                  <input className='w-[90%] sm:w-[80%] rounded-sm   md:text-[#0b0c1f] text-white' type="file" name="file" id="file"
                    onChange={handleResumeChange} />
                </div>

                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="text">skills</label>
                  <textarea className='w-[90%] sm:w-[80%] rounded-sm md:border  md:border-black' rows='4' type="text" name="skills" id="text" value={data.skills} placeholder='dont use these characters {-,/:#}' onChange={handleChange} />
                </div>
                <div className='flex flex-col pl-2 w-full'>
                  <label className=' text-white md:text-[#0b0c1f]' htmlFor="about">About</label>
                  <textarea className='w-[90%] sm:w-[80%] rounded-sm md:border  md:border-black' rows='4' type="text" name="about" id="about" value={data.about} placeholder='explain yourself ' onChange={handleChange} />
                </div>
                <div className='w-full px-2'>
                  <button type='submit' className='w-[140px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-3 text-xl font-semibold text-white md:text-[#0b0c1f] rounded-sm border-white md:border-[black] border my-4'> Build Profile</button>
                </div>
              </div>
  
  
  
            </form>
  
          </div>
  
  
  
  
        </div>
       
  
      </div>
    )
  }

export default BuildProfile