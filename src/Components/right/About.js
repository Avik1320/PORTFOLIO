import React from "react";
import "./About.css";
import Image1 from '../../Assests/pic.png';

const About = () => {
    return (
        <div className="about-body" id="about">
            <div className="image">
                <img src={Image1} alt="" />
            </div>
            <div className="name">
                Avik
                <span className="title">Ghosh</span>
            </div>
            <div className="address">
                ICARE Complex, Hatiberia haldi, Dist-Purba Medinipur,West Bengal,
                PIN-721657
                <br />
                Ph: +91 8513988423
                <br />
                Email:{" "}
                <a href="mailto:avikghsoh546@gmail.com">avikghosh546@gmail.com</a>
            </div>
            <div className="main">
                As a frontend web developer, I have honed my skills in various languages
                and technologies, including HTML, CSS, SCSS, JavaScript, ReactJS, and
                Tailwind. With a passion for creating visually appealing and
                user-friendly interfaces, I thrive on turning design concepts into
                functional websites. I possess a deep understanding of responsive web
                design principles and strive to deliver seamless user experiences across
                different devices. Through my expertise in ReactJS, I build interactive
                and dynamic web applications. The utilization of Tailwind CSS enables me
                to efficiently develop and style responsive components. I am constantly
                seeking to expand my knowledge and stay up-to-date with the latest
                trends in frontend development.
            </div>
            <div className="button">
                <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1Zb3eOJRhT6HQTdpKg8QQ4RJsyk-Y1wPE/view?usp=sharing"
                >
                    <button type="button" className="btn btn-primary">
                        Download CV
                    </button>
                </a>
            </div>
            <div className="social">
                <a href="#!">
                    <i class="fa-solid fa-envelope fa-3x"></i>
                </a>
                <a href="#!">
                    <i className="fa-brands fa-linkedin fa-3x" />
                </a>
                <a href="#!">
                    <i className="fa-brands fa-github fa-3x" />
                </a>
            </div>
        </div>
    );
};

export default About;
