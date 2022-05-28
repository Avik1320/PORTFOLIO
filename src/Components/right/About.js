import React from 'react'
import "./About.css"

const About = () => {
  return (
      <div className="about-body" id='about'>
          <div className="name">
              Avik 
              <span className="title">Ghosh</span>
          </div>
          <div className="address">
              ICARE Complex, Hatiberia haldi, Dist-Purba Medinipur,West Bengal, PIN-721657
              <br />
              Ph: +91 8513988423 
              <br />
              Email: <a href="mailto:avikghsoh546@gmail.com">avikghosh546@gmail.com</a> 
          </div>
          <div className="main">
              I am a web developer having a good knowledege of design and a having a good experience of working with react
              I am a web developer having a good knowledege of design and a having a good experience of working with react
              I am a web developer having a good knowledege of design and a having a good experience of working with react
          </div>
          <div className="button"><a target='_blank' href="https://drive.google.com/file/d/11EnFdQefB-ZSv_qzdvGGwS75zOBoY8_j/view?usp=sharing"><button type="button"className="btn btn-primary">Download CV</button></a></div>
          <div className="social">
              <a href="#!" className="facebook"><i className="fa-brands fa-facebook fa-3x"/></a>
              <a href="#!" className="linkedin"><i className="fa-brands fa-linkedin fa-3x"/></a>
              <a href="#!" className="github"><i className="fa-brands fa-github fa-3x"/></a>
              <a href="#!" className="github"><i className="fa-solid fa-brands fa-envelope fa-3x"/></a>
          </div>
      </div>
  )
}

export default About
