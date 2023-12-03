import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css'

import OurCoursesLeftImage from '../Images/DSC2203.JPG'
import OurCoursesRightImage from '../Images/DSC2146.JPG'
import OurCoursesCenterImage from '../Images/DSC2309.JPG'


import UserContext from '../UserComponent/UserContext'
import { useNavigate } from 'react-router-dom'
import URLContext from '../URLContext'
import axios from 'axios'
import FailedMsg from '../Misc/FailedMsg'


export default function OurCourses() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const { url } = useContext(URLContext);
    const [coursesList, setCoursesList] = useState([])
    const [msg, setMsg] = useState();
    const img= [OurCoursesLeftImage,OurCoursesCenterImage,OurCoursesRightImage];
    const action = (course) => {
        if (user) {
            navigate('/users/purchase/'+course.id);
            alert(course.courses_name)
        } else {
            navigate('/users/login');
        }
    }

    const getCourses = async () => {
        try {
            const query = url + "courses/approved";
            const response = await axios.get(query);
            if (response.data.status === 200) {
                setCoursesList([...response.data.data]);
            } else {
                setMsg(response.data.error);
            }
        } catch (error) {
            console.error('Error fetching Courses data:', error);
        }
    }
    useEffect(() => {
        getCourses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 50 }}>
            <h3 style={{ fontSize: 44 }}>Our Courses</h3>
            {msg && <h5>Loading failed</h5>}
            <Row>
                {coursesList.length > 0 ?
                    coursesList.map((ele, idx) => (
                        <Col xs={12} sm={12} md={6} lg={6} key={idx} >
                            <div className="grow-on-hover" style={{ padding: 20 }}>
                                <img className="img-fluid" src={img[idx]} alt='img' style={{ maxWidth: '80%', borderRadius: 20, border: '1px solid red' }} />
                                <h5 style={{ marginTop: 20, marginBottom: 5, overflow: 'hidden' }}>{ele.courses_name}</h5>
                                    {
                                        ele.courses_special_fee === ele.courses_fee
                                            ?
                                            <div style={{ display: 'flex', flexDirection:'row', alignContent:'center', justifyContent:'center', textAlign:'center' }}>
                                                <h5 style={{ color: 'green' }}>Course Fee : ₹ {ele.courses_fee || "0.00"} /-</h5>
                                            </div>
                                            :
                                            <>
                                                <div style={{ display: 'flex', flexDirection:'row', alignContent:'center', justifyContent:'center', textAlign:'center',marginTop:0 }}>
                                                    <h5>Special Fee : <del style={{ color: 'red' }}> ₹ {ele.courses_fee || "0.00"} /-  </del></h5>
                                                    <h5 style={{ color: 'green' , marginLeft:10}}> ₹ {ele.courses_special_fee || "0.00"} /-</h5>
                                                </div>
                                            </>
                                    }
                                <button className='gradient-button' style={{ width: '80%', fontWeight: 600 }} onClick={() => action(ele)}>Enroll Now</button>
                            </div>
                        </Col>
                    ))
                    :
                    <FailedMsg/>
                }
            </Row>
        </Container>
    )
}
