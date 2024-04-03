import { useEffect } from 'react';
import { companies } from '../components/LoopData'
console.log(companies);


function InfiniteScroller() {
    useEffect(() => {
        let scroller = document.getElementById('scroller')
        let count = 0;
        let fullWidth = scroller.offsetWidth

        let slide = setInterval(() => {
            count++;
            if (count >= fullWidth) {
                count = 0
            }
            scroller.scrollTo(count, 0)

        }, 30)
        return () => {
            clearInterval(slide)
        }

    }, [])
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full text-center text-xl text-gray-500'>

            <h1>Companies we collaborated with</h1>
            </div>

        <div id='scroller' className='scroller w-full overflow-hidden sm:w-[93%]'>
            
            <div className="content w-full flex gap-10">
                {
                    companies.map((el, id) => {
                        return <figure key={id} className='w-[40%] h-[60px] shrink-0 flex md:w-[30%] items-center border border-[#ffffff70] px-4 shadow-md shadow-black rounded-[5px] my-2  justify-center '>
                            <img src={el.img} className='md:w-[150px] ' alt="" />
                        </figure>
                    })
                }
            </div>

        </div>
        </div>

    )
}

export default InfiniteScroller