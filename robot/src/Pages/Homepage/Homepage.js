import React from 'react'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='r-homepage'>
        <Header/>
        <Landing/>
        <About/>
        <Events/>
    </div>
  )
}
