import React from 'react'
import "./Events.css"
import Eorn1 from "./Assets/Eorn1.svg"
import Eorn2 from "./Assets/Eorn2.svg"
import Eorn3 from "./Assets/Eorn3.svg"
import EventCard from './EventCard'


export default function Events() {
  return (
    <div className='r-events'>
        <h1 className='e-head'>
            <img src={Eorn1} className='eorn1'/>
            <img src={Eorn1} className='eorn1'/>
            Events
            <img src={Eorn2} className='eorn2'/>
            <img src={Eorn3} className='eorn3'/>
        </h1>
        <EventCard
            ename="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur"
        />
    </div>
  )
}
