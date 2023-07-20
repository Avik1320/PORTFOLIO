import React from 'react'
import "./Education.css"

const Education = () => {
  return (
    <div className="edu-body" id='education'>
      <div className='edu-title'>Education</div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Bachelor Degree In Information Technology
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>I am currently pursuing a degree in Information Technology at Haldia Institute of Technology, a renowned institution. With a strong focus on academic excellence and practical learning, I am gaining the skills and knowledge necessary to excel in the dynamic field of IT. Currently I am in fourth year. <br /><br />
                <span className='btech-marks'><b>Overall CGPA: 9.41</b></span>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Higher Secondary Schooling
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>I completed my high secondary education degree at Kendriya Vidyalaya, an esteemed institution known for its academic rigor and holistic development. Through comprehensive curriculum and experienced faculty, I acquired a strong foundation, fostering my intellectual growth and preparing me for future endeavors.</p>
              <span className='btech-marks'><b>Overall Percentage: 75.4</b></span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Secondary Schooling
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>I obtained my secondary schooling degree from Hem Sheela Model School, a prestigious institution recognized for its commitment to academic excellence and holistic development. Through their comprehensive curriculum and dedicated teachers, I gained a solid educational foundation, equipping me with the skills and knowledge necessary for future success.</p>
              <span className='btech-marks'><b>Overall Percentage: 81.7</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
