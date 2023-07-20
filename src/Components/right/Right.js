import React from 'react'
import Project from './Project'
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
      <Project />
    </div>
  )
}

export default Right
