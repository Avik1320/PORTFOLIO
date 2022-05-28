import React, { PureComponent, useState } from 'react'


import './Humberger.css'

const Humberger = () => {

    const [display, setDisplay] = useState("")
    function handleClick(e) {
        e.preventDefault()
        if (display === '')
            setDisplay("none")
        else
            setDisplay("")

    }
    return (
        <div className='main-body'>
            <div className="ham-top">
                <span className='name-hum'>Avik Ghosh</span>
                <a className="icon" >
                    <i className="fa fa-bars fa-custom" onClick={handleClick} />
                </a>
            </div>
            <div className="ham-bottom" style={{ display: display }} >
                <ul>
                    <li className="item"><a href="#about" className="link">About</a></li>
                    <li className="item"><a href="#education" className="link">Education</a></li>
                    <li className="item"><a href="#skill" className="link">Skills</a></li>
                    <li className="item"><a href="#interest" className="link">Interest</a></li>
                </ul>
            </div>


        </div>
    )
}

export default Humberger
