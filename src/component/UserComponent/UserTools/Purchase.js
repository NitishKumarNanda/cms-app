import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import URLContext from '../../URLContext';
import axios from 'axios';
import ShippingAndDeliveryPolicy from '../../TermsAndCondition/ShippingAndDeliveryPolicy';
import { Card, Col, Row } from 'react-bootstrap';
import GeneralFAQs from '../../TermsAndCondition/GeneralFAQs';
import RefundPolicy from '../../TermsAndCondition/RefundPolicy';
import TnC from '../../TermsAndCondition/TnC';
import PrivacyPolicy from '../../TermsAndCondition/PrivacyPolicy';
import PaymentPage from './PaymentPage';
import QRCode from "react-qr-code";
import CoursesTnC from '../../TermsAndCondition/CoursesTnC'

export default function Purchase() {
    const { courseID } = useParams();
    const { url } = useContext(URLContext);
    const [coursesList, setCoursesList] = useState([]);
    const navigate = useNavigate();
    const getCourses = async () => {
        try {
            const query = url + "courses/approved";
            const response = await axios.get(query);
            console.log(query);
            if (response.data.status === 200) {
                setCoursesList(response.data.data);
                console.log(response.data.data);
            } else {
                navigate("/home");
            }
        } catch (error) {
            console.error('Error fetching courses data:', error);
        }
    }
    useEffect(() => {
        getCourses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (coursesList.length === 0 || !coursesList[courseID - 1]) {
        return <div>Loading...</div>;
    }

    // Accessing properties of coursesList safely
    const selectedCourse = coursesList[courseID - 1];
    const courseFee = selectedCourse.courses_special_fee || selectedCourse.courses_fee;

    return (
        <div style={{ width: '100%', height: '100%', padding: 20 }}>{
            coursesList.length >= courseID &&
            <h4>{coursesList[courseID - 1].courses_name}</h4>
        }
            <Row>
                <div style={{ border: '2px solid black', height: '40vh', overflowY: 'auto' }}>
                    <TnC />
                    <hr />
                    <PrivacyPolicy />
                    <hr />
                    <CoursesTnC courseID={courseID} />
                    <hr />
                    <GeneralFAQs />
                    <hr />
                    <RefundPolicy />
                    <hr />
                    <ShippingAndDeliveryPolicy />

                </div>
                <h6 style={{ padding: 5 }}> Amount to be paid ₹ {courseFee} /-  as course fee </h6>
                
            </Row>
            <Row style={{ padding: 10}}>
                <Col xs={12} sm={12} md={6} lg={6} >
                    <PaymentPage coursesName={selectedCourse.courses_name} courseFee={courseFee}/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign:'center' }}>
                <p> Scan and pay courses fee, fill the transaction details and submit the form, <br/>so that we can confirm your payment.</p>
                    <Card style={{ padding: 10 }}>
                        <QRCode value={`upi://pay?pa=vmehta1210@apl&pn=Placements By Mehta&am=${courseFee}&tn=${coursesList[courseID - 1].courses_name}`} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
