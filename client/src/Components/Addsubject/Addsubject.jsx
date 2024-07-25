import React from 'react'
import './Addsubject.css'
const Addsubject = () => {
  return (
    <div className='add-subject-container-1'>
      <div className='add-subject-container-2'>
        <h1>Slot Details</h1>
        <form className='add-form'>
            <label htmlFor='date'>
              <h3>Date</h3>
                <input type='date' id='date' />
            </label>
            <label htmlFor='time'>
              <h3>Time</h3>
                <input type='time' id='time' />
            </label>
            <label htmlFor='subject'>
              <h3>Subject</h3>
            <select className='select-subject'>
                <option value="cas">Ciruit analayis and system</option>
                <option value="maths">Maths</option>
                <option value="signal and System">Signal and System</option>
                <option value="semiconductor">Semiconductor</option>
                <option value="engineering mechanics">engineering mechanics</option>
        </select>
            </label>
            <label htmlFor='teacher'>
              <h3>Teacher</h3>
                <input type='text' id='teacher' />
            </label>
            <button type='sumbit' className='sumbit-btn'>Sumbit</button>
        </form>
      </div>
    </div>
  )
}

export default Addsubject
