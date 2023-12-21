import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css'

import OurCoursesLeftImage from '../Images/DSC2203.JPG'
import OurCoursesRightImage from '../Images/DSC2146.JPG'
import OurCoursesCenterImage from '../Images/DSC2309.JPG'

import { useNavigate } from 'react-router-dom'
import URLContext from '../URLContext'
import axios from 'axios'
import FailedMsg from '../Misc/FailedMsg'


export default function OurCourses() {
    const navigate = useNavigate();
    const { url } = useContext(URLContext);
    const [coursesList, setCoursesList] = useState([])
    const [msg, setMsg] = useState();
    const img = [OurCoursesLeftImage, OurCoursesCenterImage, OurCoursesRightImage];

    const action = (course) => {
        navigate('/users/login', { state: { tab: 'purchase', courseID: course.id } });
        // if (user && user.email!==null && user.email!==undefined) {
        //     navigate('/users/purchase/' + course.id);
        // } else {
        //     console.log(course.id)
        //     navigate('/users/login', { state: { tab: 'purchase', courseID: course.id } });
        // }
    };

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
    
        // Pad single-digit day or month with a leading zero
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
    
        // Formatted date in DD-MM-YYYY format
        const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
        return formattedDate;
    };

    const getCourses = async () => {
        try {
            const query = url + "courses/approved";
            const response = await axios.get(query);
            if (response.data.status === 200) {
                console.log(response.data.data)
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
            <h3 id="section" style={{ fontSize: 44 }} >Our Courses</h3>
            {msg && <h5>Loading failed</h5>}
            <Row>
                {coursesList.length > 0 ?
                    coursesList.map((ele, idx) => (
                        <Col xs={12} sm={12} md={6} lg={6} key={idx} >
                            <div className="grow-on-hover" style={{ padding: 20 }}>
                                <div style={{ position: 'relative', top: '20px', left: '20px', width:100, backgroundColor: 'rgba(255, 0, 0, 0.8)', padding: '5px', borderRadius: '5px', transform: 'rotate(-25deg)' }}>
                                    <span style={{ fontWeight: 'bold', color: 'white' }}>Upcoming</span>
                                </div>
                                <img className="img-fluid" src={url+"uploads/"+ele.courses_image ||img[idx]} alt='img' style={{ maxWidth: '80%', borderRadius: 20, border: '1px solid red' }} />
                                <h5 style={{ marginTop: 20, marginBottom: 5, overflow: 'hidden' }}>{ele.courses_name}</h5>
                                {
                                    ele.courses_special_fee === ele.courses_fee
                                        ?
                                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-around', fontWeight:600}}>
                                            <span><i className="bi bi-calendar-event"/> {formatDate(ele.next_batch)}</span>
                                            <h6 style={{ color: 'green'}}>Course Fee : ₹ {ele.courses_fee || "0.00"} /-</h6>
                                        </div>
                                        :
                                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-around', marginTop: 0 , fontWeight:600}}>
                                            <span><i className="bi bi-calendar-event"/> {formatDate(ele.next_batch)}</span>
                                            <span style={{ color: 'green'}}><del style={{ color: 'red' }}> ₹ {ele.courses_fee || "0.00"} /- {"  "} </del>
                                             ₹ {ele.courses_special_fee || "0.00"} /- </span>
                                        </div>
                                }
                                <button className='gradient-button' style={{ width: '80%', fontWeight: 600 }} onClick={() => action(ele)}>Enroll Now</button>
                            </div>
                        </Col>
                    ))
                    :
                    <FailedMsg />
                }
            </Row>
        </Container>
    )
}
