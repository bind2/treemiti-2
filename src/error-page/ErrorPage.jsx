import React from 'react'
import './ErrorPage.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button/Button'

const ErrorPage = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className='error-page container'>
      <h1>Oops!</h1>
      <div>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>The page you are looking for might have been removed <br/>
      had its name changed or is temporarily unavailable
       </p>
      </div>
      <div>
        <Link to='/treemiti'><Button name='Go back homepage'/></Link>
        <Button goBack={goBack} name='Go back previous page'/>
      </div>
    </div>
  )
}

export default ErrorPage