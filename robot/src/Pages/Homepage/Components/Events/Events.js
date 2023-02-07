import React from 'react'
import "./Events.css"
import Eorn1 from "./Assets/Eorn1.svg"
import Eorn2 from "./Assets/Eorn2.svg"
import Eorn3 from "./Assets/Eorn3.svg"
import EventCard from './EventCard'
import Eimg1 from "./Assets/Eimg1.png"
import EventCard1 from './EventCard1'
import Eorn6 from "./Assets/Eorn6.svg"


export default function Events() {
  return (
    <div className='r-events'>
            <img src={Eorn6} className='eorn6'/>
        <h1 className='e-head'>
            <img src={Eorn1} className='eorn1'/>
            <img src={Eorn1} className='eorn1'/>
            Events
            <img src={Eorn2} className='eorn2'/>
            <img src={Eorn3} className='eorn3'/>
        </h1>
        <EventCard
            ename="Event 1"
            description="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="February 15,1500"
            time="1:00:00"
            venue="London"
            img={Eimg1}
        />
        <EventCard1
        ename="Event 2"
        description="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date="February 15,1500"
        time="1:00:00"
        venue="London"
        img={Eimg1}
        />
    </div>
  )
}
