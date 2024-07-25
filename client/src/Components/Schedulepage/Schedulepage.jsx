import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import img1 from '../../Assets/attendance.png'
import pen from '../../Assets/pen.svg'
const Schedulepage = () => {
    const user = 3
    const navigate =useNavigate() 
    const takeattendance =()=>{
      if (user===null){
        alert('For staff only')
      }else{
        navigate('/Attendance')
      }
    }
    var subjectdetails =[{
        _id:'1',
        img:img1,
        subject:'circuit and analayis',
        date:'1 jan',
        userId:'1',
        time:'9:00 a.m',
        userPosted:'bharat'},
    {
        _id:'2',
        img:img1,
        subject:'semiconductor devises',
        date:'1 jan',
        userId:'2',
        time:'9:00 a.m',
        userPosted:'ajay'},
    {
        _id:'3',
        img:img1,
        subject:'signal and system',
        date:'1 jan',
        userId:'3',
        time:'9:00 a.m',
        userPosted:'bharat'},
    {
        _id:'4',
        img:img1,
        subject:'maths',
        date:'1 jan',
        userId:'4',
        time:'9:00 a.m',
        userPosted:'bharat',
    }
]
  return (
    <div className='schedule-container-1'>
      <div className='schedule-container-2'>
        <h1>Schedule</h1>
            {
                user !== null &&
                <Link to='/Addsubject' className='addsubject'>
                <img src={pen } alt='addsubject' width='15px'/>
                < h3>Add Subject</h3>
                </Link>
            }
            <div className='schedule-container-3'>
            <div className='div-container'>Date</div>
            <div className='div-container'>Time</div>
            <div className='div-container'>Subject</div>
            <div className='div-container'>Teacher</div>
           
            </div>
         <div className='time-table'>
            {
                subjectdetails.map((detail)=>{
                    return(
                        <div className='timetable'>
                      <div className='div-container'>{detail.date}</div>
                      <div className='div-container'>{detail.time}</div>
                      <div className='div-container'>{detail.subject}</div>
                      <div className='div-container'>{detail.userPosted}</div>
                      
                      <Link to='/Attendance' className='attendance-link'><img src={detail.img} width='40px'/></Link>
                      
                      </div>
                    )})
            }
         </div>
         
      </div>
    </div>
  )
}

export default Schedulepage
