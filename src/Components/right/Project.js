import React, { PureComponent } from 'react'
import "./Project.css"

export class Interest extends PureComponent {
    render() {
        return (
            <div className="inter-body" id='interest'>
                <div className="inter-title">Projects</div>
                <div className="main-part">
                    <div className="proj-1">
                        <h4 className='heading'><b><a href="https://deptweb.vercel.app/" target='blank' >Departmental Website :</a></b></h4>
                        <div className="details">
                            <li>Developed a comprehensive departmental website utilizing React.js and SCSS (Sass). </li>
                            <li>The website aimed to
                                streamline information, enhance user experience, and promote effective communication within the
                                department.</li>
                            <li>Implemented the website’s front-end using React.js, to create interactive and dynamic web pages.</li>
                            <li>Successfully deployed the website on hosting platforms like Netlify or GitHub Pages, ensuring continuous
                                availability and regular updates. </li>
                                <li>Monitored website performance, analyzed user feedback, and implemented
                                improvements based on user needs.</li>
                        </div>
                    </div>
                    <div className="proj-1">
                        <h4 className='heading'><b><a href="https://avik1320.github.io/PORTFOLIO/" target='blank' >Portfolio Website :</a></b></h4>
                        <div className="details">
                            <li>This is a responsive portfolio website made by HTML, CSS, JavaScript, ReactJS. </li>
                            <li>It provide all Basic details about myself.</li>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Interest
