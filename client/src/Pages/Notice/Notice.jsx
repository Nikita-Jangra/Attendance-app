import React from 'react'
import NoticeBoard from './NoticeBoard'
import LeftSidebar from '../../Components/LeftSidebar/LeftSideabar'
import '../../App.css' 
const Notice = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
      <NoticeBoard/>
    </div>
  </div>
  )
}

export default Notice
