import React from 'react'
import CourseData from '../../data/CourseData.json'
import CartList from '../../components/cart-list/CartList'
import { HashLink as Link } from 'react-router-hash-link'
import { useParams } from 'react-router-dom'
import CourseCartList from '../../global-function/CourseCartList'

const CourseDetails = () => {
    const param = useParams()

    const { name, title, discription, eligibility, scope } = CourseData[param.id]
    document.title = name + " Courses Training Institute in Nashik"

    return (
        <section className='course-details-section'>
            <div className="container" id='course-details'>
                <h2>{title}</h2>
                <article dangerouslySetInnerHTML={{ __html: discription }}></article>
                <div className="carts">
                    <h3>Courses We Offer</h3>
                    <div>
                        {CourseData[param.id].coursesOffer.map((data, index) => <CartList
                            key={index}
                            index={index}
                            jobRole={data.jobRole}
                            certificateName={data.certificateName}
                            duration={data.duration}
                            skills={data.skills}
                        />)}
                    </div>
                    <div>
                        <div className='cart-scope'>
                            <h6>Course Eligibility</h6>
                            <div dangerouslySetInnerHTML={{ __html: eligibility }}></div>
                        </div>
                        <div className='cart-scope'>
                            <h6>Course Scope</h6>
                            <div dangerouslySetInnerHTML={{ __html: scope }}></div>
                        </div>
                        <div className='cart-scope'>
                            <h6>How to Join?</h6>
                            <address>
                                <p>Call at +91 <a href="tel:+919579573923">9579573923</a></p>
                                <p>Message us on <a href="https://wa.me/+919579573923?text=Hello! I am interested in one of your course / service"> whatsapp</a></p>
                                <p>Email on <a href="mailto:contact@treemiti.com">contact@treemiti.com</a></p>
                                <p>Please fill up the <Link to='/treemiti/#contact'>inqury from</Link></p>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="other-courses">
                    <h3>Our Other Courses</h3>
                    <div>
                        <CourseCartList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetails