import React from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Feedback = () => {
  return (
    <React.Fragment>
      <nav className='feedback-navigation-section'>
        <div className="container" id='feedback-navitation'>
          <ul className='feedback-links'>
            <li><Link to='/feedback/student-feedback#'>Student feedback</Link></li>
            <li><Link to='/feedback/employe-feedback#'>Employe feedback</Link></li>
          </ul>
        </div>
      </nav>

      <section className='feedback-section'>
        <div className='container' id='feedback'>
          <div className="feedback-container">
            <Outlet />
          </div>
        </div>
      </section>
    </React.Fragment>

  )
}

export default Feedback