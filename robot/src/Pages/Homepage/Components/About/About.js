import React from 'react'
import "./About.css"
import AboutCard from './AboutCard'
import Aorn1 from "./Assets/Aorn1.svg"
import Aimg1 from "./Assets/Aimg1.png"
import Aimg2 from "./Assets/Aimg2.png"


export default function About() {
  return (
    <div className='r-about'>
        <div className='r-about-top'>
            <img src={Aorn1} className="aron1" alt="" />
            <h1 className='r-abhout-title'>About</h1>
        </div>
        <AboutCard
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallversions of Lorem Ipsum."
          img1={Aimg1}
          img2={Aimg2}
        />
    </div>
  )
}
