import React from 'react'
import '../../Components/Schedulepage/Schedulepage.css'
import '../../App.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSideabar'
import Schedulepage from  '../../Components/Schedulepage/Schedulepage'
const Schedule = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
      <Schedulepage/>
    </div>
  </div>
  )
}

export default Schedule
