import React from 'react'
import Interest from './Interest'
import About from './About'
import Education from './Education'
import "./Right.css"
import Skills from './Skills'

const  Right = () => {
  return (
    <div className='right-main'>
      <About />
      <Education />
      <Skills />
      <Interest />
    </div>
  )
}

export default Right
