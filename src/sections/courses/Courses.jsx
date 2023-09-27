import React from 'react'
import CourseCartList2 from '../../global-function/CourseCartList2'


const Courses = () => {
    return (
        <section className='courses-section'>
            <div className="container" id='courses'>
                <h2>CAREER COURSES</h2>
                <div className="flex-container">
                    <CourseCartList2/>
                </div>
            </div>
        </section>
    )
}

export default Courses