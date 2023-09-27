import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const CourseFeatures = ({ index, img, name, path }) => {
  const [fname, lname] = name.split(" ")
  return (
    <li >
      <Link to={`/about/${path}/${index}#`}>
        <figure>
          <img src={img} alt="img" />
        </figure>

        <h3>{fname} <br /> {lname}</h3>
      </Link>
    </li>
  )
}

export default CourseFeatures