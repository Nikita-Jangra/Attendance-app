import React from 'react'
import './LeftSidebar.css' 
import Avatar from '../../Components/Avatar/Avatar'
import {NavLink,Link} from 'react-router-dom'

const LeftSideabar = ({notice}) => {
     var user = null
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
          {
            user !== null &&
            <Avatar margin='4px' backgroundColor='rgb(39, 140, 255)' px='8px' py='10px'
             borderRadius="100%" color='white' textDecoration='none' width='25px'>
              <Link to='/' style={{color:'white',textDecoration:'none'}}>N</Link></Avatar>
          }
        <NavLink to='/' className='side-nav-links' activeClassName='active'><p>Home</p></NavLink>
        <NavLink to='/Schedule' className='side-nav-links' activeClassName='active'><p>Schedule</p></NavLink>
        <NavLink to='/Notice' className='side-nav-links' activeClassName='active'><p>Notice</p></NavLink>
        <NavLink to='/StudentAttendance' className='side-nav-links' activeClassName='active'><p>Attendance</p></NavLink>
        {
        user ===null?
        <Link to='/Auth' className='side-nav-links' ><p>Log in</p></Link>:
         <Link className='side-nav-links'><p>Log Out</p></Link>
        }
        
        </nav>
    </div>
  )
}

export default LeftSideabar
