import React from 'react'
import "./Education.css"

const Education = () => {
  return (
    <div className="edu-body" id='education'>
      <h2 className='edu-title'>Education</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Bachelor Degree In Information Technology
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>I am pursuing my Bachelor Degree in Information Technology from haldia Institute Of Technology. Currently I am in second year and my overall Grade till now is 9 CGPA. <br /><span className="year">1 year:-</span>  <br />1st Sem: 9.2 SGPA  <span className='first'>2nd Sem: 10 CGPA</span> <br /><span className="year">2nd year:-</span>  <br />3rd Sem: 9.4 SGPA <span className="second">4th Sem: </span></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Higher Secondary Schooling
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum aut veritatis! Dignissimos optio, possimus vitae autem dolores, delectus nihil unde fugit vero accusantium alias eum expedita velit non ipsa.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Secondary Schooling
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
