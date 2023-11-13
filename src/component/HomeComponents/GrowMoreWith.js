import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgSrc from '../Images/DSC2203.JPG';
import './home.css'
export default function GrowMoreWith({images}) {
    return (
        <Container style={{ justifyItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
            <Row>
                <Col>
                    <h2 style={{ fontSize: 32, marginTop: 60 }}>Unlock Your Future with Mehta Placements</h2>
                    <p style={{ padding: '10px 20% 0% 20%' }}>Discover the Mehta Placements Advantage in Just 15 Days! Embark on a Journey to Your Dream Job with Expert Live Sessions, Skill Assessments, Dedicated Placement Support, Realistic Mock Interviews, and Exclusive Access to Top Company Interviews—Your Fast-Track to Success!</p>
                </Col>
            </Row>
            <Container style={{ padding: 10, marginTop: 20 }}>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <Row className="grow-on-hover" style={{ width: '95%' }}>
                            <Col>
                                <img className="img-fluid" src={images?images.A?images.A:imgSrc:imgSrc} style={{ border: '2px solid red', borderRadius: 10, maxHeight: 300, maxWidth: 300 }} alt='mehto' />
                            </Col>
                            <Col className="d-flex align-items-center">
                                <h5>
                                    Secure Your Interview Opportunity with Confidence
                                </h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <Row className="grow-on-hover" style={{ width: '95%' }}>
                            <Col>
                                <img className="img-fluid" src={images?images.B?images.B:imgSrc:imgSrc} style={{ border: '2px solid red', borderRadius: 10, maxHeight: 300, maxWidth: 300 }} alt='mehto' />
                            </Col>
                            <Col className="d-flex align-items-center">
                                <h5 >
                                    Gain Insights from Industry Experts with Ease
                                </h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <Row className="grow-on-hover" style={{ width: '95%' }}>
                            <Col>
                                <img className="img-fluid" src={images?images.C?images.C:imgSrc:imgSrc} style={{ border: '2px solid red', borderRadius: 10, maxHeight: 300, maxWidth: 300 }} alt='mehto' />
                            </Col>
                            <Col className="d-flex align-items-center">
                                <h5 >
                                    Competitive Average Package of 6-7 LPA
                                </h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <Row className="grow-on-hover" style={{ width: '95%' }}>
                            <Col>
                                <img className="img-fluid" src={images?images.D?images.D:imgSrc:imgSrc} style={{ border: '2px solid red', borderRadius: 10, maxHeight: 300, maxWidth: 300 }} alt='mehto' />
                            </Col>
                            <Col className="d-flex align-items-center">
                                <h5 >
                                    2-Week Online training Program
                                </h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}
