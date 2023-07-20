import React from 'react'
import "./Left.css"
import Image1 from '../../Assests/pic.png';

const Left = () => {
  return (
    <>
      <div className='Container left_main'>
        <div className="image_holder">
          <img src={Image1} alt="" />
        </div>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
            {/* <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li> */}
            <li className="nav-item"><a href="#skill" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#interest" className="nav-link">Projects</a></li>
            {/* <li className="nav-item"><a href="#awards" className="nav-link">Awards</a></li> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Left
