import React from 'react'
import img from '../../img/pexels-sindre-fs-1040881.jpg'

const EmployeFeedbackCart = () => {
  return (
    <div className='employe-feedback-cart'>
      <p>“Thanks to the Designcy, our web design has reached new heights. Their expertise in Webflow
        and UI/UX is simply amazing. Our website has become a captivating masterpiece!”</p>
      <div>
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <p>Samantha Summers</p>
          <p>Sparkle & Shine Co.</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeFeedbackCart