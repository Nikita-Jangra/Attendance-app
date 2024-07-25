import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Schedule from './Pages/Schedule/Schedule.jsx'
import Notice from './Pages/Notice/Notice.jsx'
import Addsubject from './Components/Addsubject/Addsubject.jsx'
import EditNotice from './Pages/Notice/EditNotice.jsx'
import Attendance from './Components/Attendance/Attendance.jsx'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/Addsubject' element={<Addsubject/>}/>
        <Route path='/Notice' element={<Notice/>}/>
        <Route path='/EditNotice' element={<EditNotice/>}/>
        <Route path='/Attendance' element={<Attendance/>}/>
    </Routes>
  )
}

export default AllRoutes
