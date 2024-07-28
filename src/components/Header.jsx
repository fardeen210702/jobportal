import  {  useState } from 'react'
import logo from '../assets/logo.svg'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import MobileNav from './MobileNav';


function Header() {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    return (

        <div className=' fixed top-1 left-0 w-full z-[999]'>
            {/* mobile navbar */}
            <div className=' rounded-sm p-3 flex justify-between items-center relative md:hidden bg-[white]'>
                <div className='flex gap-1 items-center'>
                    <figure className='w-[40px]'>
                        <Link to='/'>
                        <img src={logo} alt="" />
                        </Link>
                    </figure>
                    <h1 className='font-bold text-xl text-[#0b0c1f]'>JOBPORTAL</h1>
                </div>
                <div onClick={handleToggle} className='flex items-center gap-2'>

                    <span className='text-2xl font-bold text-[#0b0c1f]'>{toggle ? <RxCross2 /> : <IoMenu />}
                    </span>
                </div>

                <div className={toggle ? ` bg-[#f6f6fb] absolute left-0 top-[100%] w-full h-screen  transition-all duration-300  md:hidden ` : 'bg-[#f6f6fb] absolute -left-[100%] w-full h-screen transition-all duration-300 top-[100%] md:hidden  '}>
                    <MobileNav toggle={toggle} setToggle={setToggle} />
                </div>

            </div>

            {/* Mid screen+ navbar */}

            <div className='hidden md:flex w-full p-3 flexx justify-center  '>
                <div className='max-w-[1800px]  bg-[white] flex justify-between w-[97%]  p-2 rounded-[3px]'>
                    <div className='flex gap-2 items-center'>
                        <figure className='w-[50px]'>
                            <img src={logo} alt="" />
                        </figure>
                        <Link to='/'>
                        <h1 className='font-bold text-xl text-[#0b0c1f] jersey' >JOB PORTAL</h1>
                        </Link>
                    </div>

                    <div className='flex  items-center gap-2'>
                        <ul className='flex gap-4 items-center mr-2 font-medium text-md cursor-pointer  text-[#0b0c1f]'>
                            <Link to='/jobs'>
                            <li className='hover:text-[#E45826]'>Jobs</li>
                            </Link>
                            
                            
                            <Link to='/interviewquestions'>
                            <li  className='hover:text-[#E45826]'>Interview prep</li>
                            </Link>
                            <Link to='/publishjobs'>
                            <li  className='hover:text-[#E45826] text-[#4b4b4b] hover:border-[#E45826] border rounded-md border-[#6b6a6a65] flex items-center gap-2 px-1 py-2 transition-all duration-150'>Add job <FaPlus className='text-xl'/> </li>
                            </Link>

                            <Link to='/profile'>
                            <li  className='hover:text-[#E45826] text-3xl text-[gray]'><FaUserCircle/></li>
                            </Link>
                        </ul>
                        {/* <div className="logins flex gap-2">
                            <button className='border border-black rounded py-1 px-2'>Login  </button>
                            <button className='border bg-[#0b0c1f] text-[#fef2ee] border-black rounded py-1 px-2'>Singin  </button>
                        </div> */}


                    </div>

                </div>

            </div>
        </div>

    )
}

export default Header