import React from 'react'
import CourseData from '../data/CourseData.json'
import CourseCart from '../components/course-cart/CourseCart'

const CourseCartList = () => CourseData.map((data, index) => <CourseCart
    key={index}
    index={index}
    img={'../.' + data.img}
    name={data.name}
    path={data.path}
/>)

export default CourseCartList