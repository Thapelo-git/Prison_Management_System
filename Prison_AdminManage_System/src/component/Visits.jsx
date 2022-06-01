import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
function Visits() {
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
  return (
      <>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
    <TimePicker onChange={setTime} value={time} />
    </>
  )
}

export default Visits