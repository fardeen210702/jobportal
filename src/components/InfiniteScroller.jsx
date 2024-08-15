
import { useEffect, useState } from 'react';
import { companies } from '../components/LoopData'
// console.log(companies);


function InfiniteScroller() {
    
    useEffect(() => {
        const scroller = document.getElementById('scroller')
        let count = 0
        let scrollWidth = scroller.scrollWidth
        let startScrolling;
        function start() {
            startScrolling = setInterval(() => {
                
                if (count >= scrollWidth) {
                    count = 0;
                }
                count++;
                scroller.scrollTo(count, 0)
            }, 30);
        }
        start()
        return () => {
            clearInterval(startScrolling)
            start()
        }
    }, [])

   


    return (
        <div className='w-full flex flex-col items-center my-10'>
            <div className='w-full text-center text-xl text-gray-500 my-4'>

                <h1>Companies we collaborated with</h1>
            </div>

            <div className=' relative   flex justify-center w-[98%]  sm:w-[93%]'>
                {/* boxshadows start */}

                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#f6f6fb]" />
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-l from-transparent to-[#f6f6fb]" />

                {/* box shadow ends */}

                <div id='scroller' className=' scroller w-full overflow-hidden '>


                    <div className=" w-full flex gap-10 p-2 scroll"   >
                        {
                            companies.map((el, id) => {
                                return <div key={id} className=' bg-white border border-[#ffffff63] w-[180px] sm:w-[220px] sm:p-8 sm:h-[60px] md:h-[40px] h-[50px] p-6  shrink-0 rounded-[4px] shadow-md shadow-[#6161614a]'>
                                    <figure className={` w-full h-full flex items-center`} >
                                        <img src={el.img} className='img ' alt="" />
                                    </figure>
                                </div>
                            })
                        }
                    </div>

                </div>
            </div>

        </div>

    )
}

export default InfiniteScroller