import React ,{useState} from 'react'
import './Attendance.css'
const Attendance = () => {
    const [serial, setSerial] = useState('')
    var counter = 1
    const serialno =()=>{
        setSerial(counter+1)
    }
    const attendancerecord =[{
        _id : '1',
        rollno: '23432202010329',
        name: 'nikita',
        fathername: 'jaiveer singh'},
    {
        _id : '2',
        rollno: '2202010343329',
        name: 'nikita',
        fathername: 'jaiveer kumar'},
    {
        _id : '3',
        rollno: '223402010329',
        name: 'nikita',
        fathername: 'jaiveer jangra'},
    {
        _id : '4',
        rollno: '22020109349329',
        name: 'nikita',
        fathername: 'jaiveer'},
    {
        _id : '5',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '6',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '7',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '8',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '9',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '10',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '11',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    },
    {
        _id : '12',
        rollno: '220201048729',
        name: 'nikita',
        fathername: 'jaiveer'
    }
]
  return (
    <div className='attend-container-1'>
            <h1>Attendance</h1>
        <div className='attend-container-2'>
            <div className='attendance-div-1'>
            <div className='div-container'>S.No</div>
            <div className='div-container'>Roll-no</div>
            <div className='div-container'>Name</div>
            <div className='div-container'>Father's Name</div>
            <div className='div-container'>Attendance</div>
            </div>
                {
                    
                    attendancerecord.map((record)=> {
                        return(
                            <div className='attendance-div-2'>
                        
                        <div className='div-container'>{record._id}</div>
                        <div className='div-container'>{record.name}</div>
                        <div className='div-container'>{record.rollno}</div>
                        <div className='div-container'>{record.fathername}</div>
                        <input type='checkbox' className='checkbox' />
                        
                    </div>
                        )
                    })
                }
        </div>
      <h1>Total Students</h1>
    </div>
  )
}

export default Attendance
