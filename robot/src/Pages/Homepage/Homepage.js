import React from 'react'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Schedule from './Components/Schedule/Schedule'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='r-homepage'>
        <Header/>
        <Landing/>
        <About/>
        <Events/>
        <Schedule/>
        <Footer/>
    </div>
  )
}
