import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import URLContext from '../../URLContext';
import axios from 'axios';
import ShippingAndDeliveryPolicy from '../../TermsAndCondition/ShippingAndDeliveryPolicy';
import { Row } from 'react-bootstrap';
import GeneralFAQs from '../../TermsAndCondition/GeneralFAQs';
import RefundPolicy from '../../TermsAndCondition/RefundPolicy';
import TnC from '../../TermsAndCondition/TnC';
import PrivacyPolicy from '../../TermsAndCondition/PrivacyPolicy';
import PaymentPage from './PaymentPage';

export default function Purchase() {
    const { courseID } = useParams();
    const { url } = useContext(URLContext);
    const [coursesList, setCoursesList] = useState([])
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
                <div style={{ border: '2px solid black', height: '50vh', overflowY: 'auto' }}>
                    <TnC />
                    <hr />
                    <PrivacyPolicy />
                    <hr />
                    <GeneralFAQs />
                    <hr />
                    <RefundPolicy />
                    <hr />
                    <ShippingAndDeliveryPolicy />

                </div>
                <h6> Amount to be paid ₹ { courseFee } /-  as course fee </h6>
                
            </Row>
            <PaymentPage />
        </div>
    )
}
