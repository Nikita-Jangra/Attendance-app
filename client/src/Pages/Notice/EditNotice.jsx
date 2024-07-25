import React from 'react'
import './EditNotice.css'
function EditNotice() {
  return (
    <div className='edit-notice-1'>
        <div className='edit-notice-2'>
        <h2>Enter Information:</h2>
        <textarea rows='20' className='textarea-notice' cols='140' placeholder='Enter the information needed to display on notice board'></textarea>
        <div >
          <button type='sumbit' className='sumbitbtn'>Sumbit</button>
        </div>
        </div>
    </div>

  )
}

export default EditNotice
