import React from 'react'
import Logo from '../assets/logo.svg'
function Loading() {
  return (
    <div className="loading-icon">
      {/* <div className="loader"></div> */}
      <img className='loader' src={Logo} alt="" />
    </div>
  )
}

export default Loading