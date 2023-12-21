import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import URLContext from '../../URLContext';
import axios from 'axios';
import ShippingAndDeliveryPolicy from '../../TermsAndCondition/ShippingAndDeliveryPolicy';
import { Card, Col, Form, Row } from 'react-bootstrap';
import GeneralFAQs from '../../TermsAndCondition/GeneralFAQs';
import RefundPolicy from '../../TermsAndCondition/RefundPolicy';
import TnC from '../../TermsAndCondition/TnC';
import PrivacyPolicy from '../../TermsAndCondition/PrivacyPolicy';
import PaymentPage from './PaymentPage';
import QRCode from "react-qr-code";
import CoursesTnC from '../../TermsAndCondition/CoursesTnC'
import Syllabus from '../../CoursesPageComponent/Syllabus';
import UserDetails from './UserDetails';


export default function Purchase() {
    const { courseID } = useParams();
    const { url } = useContext(URLContext);
    const [coursesList, setCoursesList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [Saving, setSaving] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(coursesList[courseID - 1] || null)
    const [selectedId, setSelectedId] = useState(courseID || 0);
    const [courseFee, setCourseFee] = useState(0);
    const navigate = useNavigate();
    //---------------------------------------- Add a radio button to select the courses ---- //
    const handleSelection = (id) => {
        setSelectedId(id);
        setSelectedCourse(coursesList[id]);
        setCourseFee(coursesList[id].courses_fee >= coursesList[id].courses_special_fee ? coursesList[id].courses_special_fee : coursesList[id].courses_fee);
    };
    //---------------------------------------- then other things will be updated----------------------//
    const getCourses = async () => {
        try {
            const query = url + "courses/approved";
            const response = await axios.get(query);
            console.log(query);
            if (response.data.status === 200) {
                const tempData = response.data.data;
                setCoursesList(tempData);
                setSelectedCourse(tempData[courseID - 1]);
                setSelectedId(courseID - 1);
                setCourseFee(tempData[courseID - 1].courses_fee >= tempData[courseID - 1].courses_special_fee ? tempData[courseID - 1].courses_special_fee : tempData[courseID - 1].courses_fee);
                setLoading(false);
                console.log(tempData);
            } else {
                navigate("/home");
            }
        } catch (error) {
            console.error('Error fetching courses data:', error);
        }
    }
    useEffect(() => {
        getCourses();
        console.log(selectedId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (isLoading) {
            // Simulate loading completion after 3 seconds (replace this with your actual loading logic)
            const loadingTimeout = setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => clearTimeout(loadingTimeout);
        }
    }, [isLoading]);

    const handleRefresh = () => {
        setLoading(true);
        window.location.reload(); // This line will refresh the page
    };
    if (isLoading) {
        return <div style={{ padding: 5 }} onClick={handleRefresh}>Loading...</div>;
    }

    return (
        <div style={{ width: '100%', height: '100%', padding: 20 }}>
            <Row>
                <div style={{ padding: 10, border: '1px solid black' }}>
                    <h4>Select the course </h4>
                    <Form>
                        {
                            coursesList.map((ele, idx) => (
                                <div style={{ padding: 5 }} key={idx}>
                                    <Card key={idx} style={{ padding: 5, fontSize: 14, paddingLeft: 10 }}>
                                        <Form.Check
                                            type="radio"
                                            id="radio1"
                                            label={ele.courses_name}
                                            checked={selectedId === idx}
                                            onChange={() => handleSelection(idx)}
                                        />
                                    </Card>
                                </div>
                            ))
                        }

                    </Form>
                </div>
            </Row>
            {
                selectedId >= 0 ?
                    <>
                        <br />
                        <h3>Syllabus</h3>
                        <Syllabus courseId={selectedId + 1} />

                        {
                            Saving ?
                                <>
                                    <Row>
                                        <h4>Upload your Picture and Resume then fill all the fields and save to continue for payment</h4>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <UserDetails enableEditing={Saving} isSaved={setSaving} />
                                        </Col>
                                    </Row>
                                </>
                                :
                                <>
                                    <Row>
                                        <h4 style={{ marginTop: 20 }}>Terms and Conditions</h4>
                                        <div style={{ border: '2px solid black', height: '40vh', overflowY: 'auto' }}>
                                            <TnC />
                                            <hr />
                                            <PrivacyPolicy />
                                            <hr />
                                            <CoursesTnC courseID={selectedId} />
                                            <hr />
                                            <GeneralFAQs />
                                            <hr />
                                            <RefundPolicy />
                                            <hr />
                                            <ShippingAndDeliveryPolicy />

                                        </div>
                                        <h6 style={{ padding: 5 }}> Amount to be paid ₹ {courseFee} /-  as course fee </h6>

                                    </Row>
                                    <Row style={{ padding: 10 }}>
                                        <Col xs={12} sm={12} md={6} lg={6} >
                                            <PaymentPage coursesName={selectedCourse.courses_name} courseFee={courseFee} />
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                            <p> Scan and pay courses fee, fill the transaction details and submit the form, <br />so that we can confirm your payment.</p>
                                            <Card style={{ padding: 10 }}>
                                                <QRCode value={`upi://pay?pa=vmehta1210@apl&pn=Placements By Mehta&am=${courseFee}&tn=${coursesList[selectedId].courses_name}`} />
                                            </Card>
                                            <p>If above QR code doesn't work then <br /> UPI on<strong> 7992475976 </strong> (PhonePe, Paytm, GPay)</p>
                                        </Col>
                                    </Row>
                                </>
                        }
                    </>
                    :
                    <></>
            }
        </div>
    )
}
