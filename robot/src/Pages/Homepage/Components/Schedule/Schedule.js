import React from 'react'
import "./Schedule.css"
import Sorn1 from "./Assets/Sorn1.svg"
import Sdropdown from './Sdropdown'

export default function Schedule() {
  return (
    <div className='r-schedule'>
        <div className='r-heading'>
            <img src={Sorn1} alt="" className='sorn1'/>
            Schedule
        </div>
        <div className='r-dropdowns'>
            <Sdropdown
                date="24"
                month="Feb"
                ename="Event 1"
                event1="Event 1"
                event2="Event 2"
                event3="Event 3"
                event4="Event 4"
            />
            <Sdropdown
                date="24"
                month="Feb"
                ename="Event 1"
                event1="Event 1"
                event2="Event 2"
                event3="Event 3"
                event4="Event 4"
            />
            <Sdropdown
                date="24"
                month="Feb"
                ename="Event 1"
                event1="Event 1"
                event2="Event 2"
                event3="Event 3"
                event4="Event 4"
            />
        </div>
    </div>
  )
}
