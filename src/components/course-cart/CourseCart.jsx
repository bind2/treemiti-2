import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const CourseCart = ({ index, img, name, path}) => {
    const [fname, lname] = name.split(" ")
    return (
        <div className='course-cart'>
            <Link to={`/course/${path}/${index}#`}>
                <figure>
                    <img src={img} alt="img" />
                </figure>
                <h3>{fname} <br/> {lname}</h3>
            </Link>
        </div>
    )
}

export default CourseCart