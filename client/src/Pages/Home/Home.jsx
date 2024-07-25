import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSideabar.jsx'
import RightSidebar from '../../Components/RightSidebar/RightSidebar.jsx'
import '../../App.css'
const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home
