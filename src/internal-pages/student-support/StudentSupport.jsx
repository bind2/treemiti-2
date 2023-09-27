import React from 'react'
import AboutData from '../../data/AboutData.json'
import { NavLink as Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import CourseCartList from '../../global-function/CourseCartList'

const StudentSupport = () => {
  const param = useParams()
  
  const { name, thumbnail, discription } = AboutData[param.id]
  document.title = name

  let serviceList = AboutData.map((data, index) => {
    const { img, name, path } = data
    const [fname, lname] = name.split(" ")
    return <li key={index}>
      <Link to={`/about/${path}/${index}#`}>
        <figure>
          <img src={'../.' + img} alt="img"></img>
        </figure>
        <h3>{fname}<br />{lname}
        </h3>
      </Link>
    </li>
  })

  return (
    <section className='student-support-section'>
      <div className='container' id='student-support'>
        <h2>TREEMITI STUDENT SUPPORT</h2>
        <ul className='features-list'>
          {serviceList}
        </ul>
        <h3>{name}</h3>
        <div className='about-guidance'>
          <figure>
            <img src={'../.' + thumbnail} alt="img" />
          </figure>
          <article dangerouslySetInnerHTML={{ __html: discription }}></article>
        </div>
        <div className="other-courses">
          <h3>Our Other Courses</h3>
          <div>
            <CourseCartList/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentSupport