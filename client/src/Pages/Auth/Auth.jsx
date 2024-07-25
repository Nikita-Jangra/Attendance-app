import React,{useState} from 'react'
import './Auth.css'
import logo from '../../Assets/logo.png'
const Auth = () => {
  const [isSignup, setisSignup] = useState(true)
  const handle =()=>{
    setisSignup(!isSignup)
  }
  return (
    <div className='auth-page'>
        <div className='auth-container-1'>
        {
          !isSignup && <img src={logo} alt='logo' className='img-logo' width='60px'/>
        }
      <div className='auth-container-2'>
        <form>
          {
            isSignup &&
            <>
            <h2>Username</h2>
            <label htmlFor='name'>
            <input type='text' id='name' placeholder='Name'  />
        </label>
        </>
          }
        <h2>Email</h2>
        <label htmlFor='email'>
            <input type='email' id='email' placeholder='Email'  />
        </label>
        <div className='forget-password'>
        <h2>Password</h2>
        {
          !isSignup&&<p style={{fontSize:"13px",color: 'blue'}}>Forget Password?</p>
          }
        </div>
        <label htmlFor='password'>
            <input type='password' id='password' placeholder='Password'  />
        </label><br/>
        {
            isSignup && <p style={{color:"grey", fontSize:"13px"}}>Passwords must contain at least eight characters including 1 letter and 1 number.</p>
          }
        <button type='sumbit' className='login-btn'>{ isSignup ? 'Sign Up' :'Log in'}</button>
        {
            isSignup && 
            <p style={{color:"#666767", fontSize:"13px"}}>By clicking "Signup", you agree to our 
              <span style={{color:"#007ac6"}}> terms of and condition </span>,
              <span style={{color:"#007ac6"}}>privacy policy</span>, 
              <span style={{color:"#007ac6"}}>cookie policy</span></p>
          }
      </form>
      </div>
      
      {
        isSignup ? 
        <>
        <p className='handle-text'>Already have an account?
        <button onClick={handle} className='handle-btn'>Log in</button></p>
        </>:
        <><p className='handle-text'>Doesn't have an account?
        <button onClick={handle} className='handle-btn'>Sign up</button></p>
        </>
      }
      </div>
    </div>
  )
}

export default Auth
