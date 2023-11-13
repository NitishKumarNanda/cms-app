import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css'

export default function OurCourses({action,images}) {
    return (
        <Container style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 50 }}>
            <h3 style={{fontSize:44}}>Our Courses</h3>
            <Row style={{ marginTop: 20 }}>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div  className="grow-on-hover" style={{padding:20}}>
                        <img className="img-fluid" src={images.OurCoursesLeftImage} alt='img' style={{ maxWidth: '80%', borderRadius:20, border:'1px solid red' }}/>
                        <h5 style={{ marginTop: 20, marginBottom: 20 }}>15-Day Fast-Track to Your Dream Job Course</h5>
                        <button className='gradient-button' style={{ width: '80%', fontWeight: 600 }} onClick={action.actionA}>Enroll Now</button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} >
                    <div className="grow-on-hover" style={{padding:20}}>
                        <img className="img-fluid" src={images.OurCoursesRightImage} alt='img' style={{ maxWidth: '80%', borderRadius:20, border:'1px solid red' }}/>
                        <h5 style={{ marginTop: 20, marginBottom: 20 }}>Master English Speaking in Just 30 Days: Fluent Communication</h5>
                        <button className='gradient-button' style={{ width: '80%', fontWeight: 600 }} onClick={action.actionB}>Enroll Now</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
