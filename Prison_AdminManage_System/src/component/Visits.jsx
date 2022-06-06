import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import '../Style/Visists.css'
function Visits() {
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
  return (
      <>
      <div className='heading'>
        <h3>Update Visits</h3>
      </div>
      <div className='pickers'>
        <div>
          <p>Enter Date</p>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
        <div>
          <p>Enter Time</p>
          <TimePicker onChange={setTime} value={time} />
        </div>
      
    
      </div>
      <div className='button_cover'>
      <button className='button'><h4 className='button_Lable'>Submit</h4></button>
      </div>
      <div className='visits_list'>

      </div>
    
    </>
  )
}

export default Visits