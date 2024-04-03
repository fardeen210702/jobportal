import { useEffect, useState } from 'react'
import {arr} from '../components/LoopData'
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";
function    Loop() {
    const [slide, setSlide] = useState(0)    

    function handleLeft(){
        setSlide((prev) => prev===0 ? arr.length -1 : prev-1)
    }
    function handleRight(){
        setSlide((prev) => prev===arr.length-1 ? 0 : prev+1)

    }

    return (
    <div className='rounded-[5px] md:w-[97%] h-min md:mt-10  overflow-hidden  text-white '>
        <div className="content flex w-full transition-all duration-1000 ease-in-out  " style={{transform: `translateX(-${slide * 100}%)`}}>
            {
                arr.map((el,index)=>{
                    return <div key={index} className='w-full shrink-0 md:flex md:justify-center  md:pt-3  '>
                        <figure className=' w-full flex flex-col items-center md:flex-row md:w-[98%]  border border-[#ffffff3a] lg:justify-around rounded-[5px]  shadow-black shadow-lg bg-[#0b0c1f]'>
                            <img className='w-full md:w-[80%] lg:w-[42%] xl:w-[40%]' src={el.img} alt="" />
                            <div className=' w-[90%]  lg:w-1/2 xl:w-[50%] py-2'>
                            <figcaption className='font-bold text-xl  mb-4  z-10 sm:text-3xl text-[#E45826] xl:text-5xl '>{el.title}</figcaption>
                            <figcaption className='xl:text-xl' >{el.description}</figcaption>
                            </div>
                        </figure>
                    </div>
                })
            }

        </div>
        <div className='flex w-full items-center justify-center gap-3 mb-4 mt-5 '>

        <button onClick={handleLeft} className='text-2xl text-[#E45826]'> <FaArrowLeft/></button>
        {
            arr.map((_,index)=>{
                return <p  key={index} className={`rounded-[50%] h-[10px] w-[10px] border border-red-300 bg-[#E45826] transition-all duration-500 ${slide === index ? 'w-[12px] h-[12px] bg-[#f99c9c] ' : ''}`}></p>
            })
        }
        <button onClick={handleRight} className='text-2xl text-[#E45826]'> <FaArrowRight/></button>
        </div>

    
    </div>
    )
}

export default Loop