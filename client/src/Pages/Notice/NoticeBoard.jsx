import React from 'react'
import {Link} from 'react-router-dom'
import './NoticeBoard.css'
import pen from '../../Assets/pen.svg'
import Avatar from '../../Components/Avatar/Avatar'

const NoticeBoard = () => {
    var user =4
    var notices =[{
        info: 'tomorrow there is a holiday ',
        dateOn: '1 jan',
        userPosted: 'sahil' ,
    },
    {
        info: 'there is a holiday tomorrown a civil case persoice al delivery of  ',
        dateOn: '1 jan',
        userPosted: 'arun' ,
    },
    {
        info: 'there is a holiday tomorrow nal jurisdiction over a defendant is obtained by serv',
        dateOn: '1 jan',
        userPosted: 'kumar' ,
    },
    {
        info: 'there is a hothe summons or subpoena to the peron or an authorized agent of the person. Service may also bliday tomorrow',
        dateOn: '1 jan',
        userPosted: 'kumar' ,
    },
    {
        info: 'there is a holi kgjrng krlgnrjklg jkfgnjs jsligj sngjkn day tomorrow',
        dateOn: '1 jan',
        userPosted: 'sahil' ,
    },
    {
        info: 'there is a holiday tomknkjgnguj kfgrill kignir irgnirn orrow',
        dateOn: '1 jan',
        userPosted: 'sahil' ,
    }]
  return (
    <div className='notice-container-1'>
        <div className='notice-container-2'>
        <h1>Notice Board</h1>
    {
        user !== null&&
        <div className='edit-btn'>
        <Link to='/EditNotice' ><img src={pen} alt='edit' width='16px'/></Link>
        <Link to='/EditNotice' className='edit-link'>Edit</Link>
        </div>
    }
    </div>
      <div className='notice-container-3'>
        {
            notices.map((notice)=> {
                return(
                    <div className='notice-container-4'>
          <div className='div-notice-1'> 
          <h3>{notice.info}</h3>
          <div className='div-dateon'>
             <p>Published on: {notice.dateOn}</p>
             <div className='div-posted'>
             <div><Avatar backgroundColor=' #c9e3fd' px='10px' py='8px' borderRadius='2px' fontSize='13px'
             color='black' >{notice.userPosted.toUpperCase().charAt(0)}</Avatar></div>
             <div><p>Posted by: {notice.userPosted}</p></div>
             </div>
                    </div>
                    </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default NoticeBoard
