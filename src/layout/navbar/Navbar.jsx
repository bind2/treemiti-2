import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../logo-img/treemiti-white-logo.png'
const Navbar = () => {
  const [state, setState] = useState({ menu: true })

  const showHide = () => {
    setState({ menu: !state.menu })
  }


  return (
    <nav>
      <div className="container" id='navbar'>
        <Link to='/#'><img src={logo} alt="logo" /></Link>

        <ul className={state.menu ? 'nav-links' : 'nav-links nav-links-active'}>
          <li onClick={showHide}><Link to='/#'>Home</Link></li>
          <li onClick={showHide}><Link to='/#courses'>Courses</Link></li>
          <li onClick={showHide}><Link to='/#about'>About us</Link></li>
          <li onClick={showHide}><Link to='/#testimonials'>Testimonials</Link></li>
          <li onClick={showHide}><Link to='/#placements'>Placements</Link></li>
          <li onClick={showHide}><Link to='/#guidance'>Guidance</Link></li>
          <li onClick={showHide}><Link to='/#contact'>Contact</Link></li>

          <div>
            <p>© Copyright 2012. <br /> All rights reserved by <strong>Treemiti.</strong><br /> Designed & Developed by <br /> <a href="http://www.treemiti.in/infotech" target='_blank'>Treemiti Infotech</a></p>
            <p><a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a></p>
          </div>
        </ul>

        <div className={state.menu ? "menu-bar" : "menu-bar menu-bar-active"} onClick={showHide}>
          <span className='menu-name'>menu</span>
          <span className={state.menu ? 'menu-icon' : 'menu-icon menu-active'}></span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar