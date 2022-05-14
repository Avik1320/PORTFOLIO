import React, { PureComponent } from 'react'
import "./Skills.css"

export class Skills extends PureComponent {
  render() {
    return (
        <div className="skills-body" id='skill'>
            <span className="ski-title">Skills</span>

        <div className="ski-body">
            <span className='ski-head'>Programming Languages and tools</span>
            <div className="icon">
            <i className="fa-brands fa-html5 fa-3x"/>
            <i className="fa-brands fa-css3 fa-3x"/>
            <i className="fa-brands fa-js fa-3x"/>
            <i className="fa-brands fa-node-js fa-3x"/>
            <i className="fa-brands fa-npm fa-3x"/>
            <i className="fa-brands fa-java fa-3x"/>
            <i className="fa-brands fa-python fa-3x"/>
            <i className="fa-solid fa-c fa-3x"/>
            </div>
            
            <div className="des">
                <ul className="list">
                    <li className='items'>HTML, CSS, javaScript, node.js, ReactJS : <span className="level">Intermediate</span></li>
                    <li className='items'>C, C++ : <span className="level">Advanced</span></li>
                    <li className='items'>Java, npm, python : <span className="level">Beginner</span></li>
                </ul>
            </div>
        </div>

        </div>
    )
  }
}

export default Skills
