import React from 'react'
import "./Left.css"

const Left = () => {
  return (
    <div className='Container left_main'>
      <div className="image_holder">
       <div className="navbar">
           <ul className="navbar-nav">
               <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
               <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
               <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
               <li className="nav-item"><a href="#skill" className="nav-link">Skills</a></li>
               <li className="nav-item"><a href="#interest" className="nav-link">Interest</a></li>
               <li className="nav-item"><a href="#awards" className="nav-link">Awards</a></li>
           </ul>
       </div>
      </div>
    </div>
  )
}

export default Left
