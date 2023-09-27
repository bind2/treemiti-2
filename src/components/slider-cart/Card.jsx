import React from 'react'

const Card = ({ name, field, company, img }) => {
  return (
    <div className="card">
      <figure>
        <img src={img} alt="img" />
      </figure>
      <p>
        {name}
        <br />
        <small>{field}</small>
        <br />
        <strong>{company}</strong>
      </p>
    </div>
  )
}

export default Card