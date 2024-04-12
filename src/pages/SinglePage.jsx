import React from 'react'
import { useParams } from 'react-router-dom'

function SinglePage() {
  const id = useParams()
  console.log(id,'id');
  return (
    <div className='bg-[#07081c]'>

    </div>
  )
}

export default SinglePage