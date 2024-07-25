import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
const Header = () => {
  return (
   <header>
    <img src={logo} alt='logo' className='logo'/>
    <h1>J.C. Bose University Of Science And Technology,YMCA</h1>
   </header>
  )
}

export default Header
