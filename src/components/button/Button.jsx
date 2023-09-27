import React from 'react'

const Button = ({name, goBack}) => {
  return (
    <button className='btn' onClick={goBack}>{name}</button>
  )
}

export default Button