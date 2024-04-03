import React from 'react'
import Loop from '../components/Loop'
import InfiniteScroller from '../components/InfiniteScroller'

function Home() {
  return (
    <div className='w-full flex flex-col items-center  border-2 border-red-800 pt-14'>
      <Loop/>
      <InfiniteScroller/>

    </div>
  )
}

export default Home