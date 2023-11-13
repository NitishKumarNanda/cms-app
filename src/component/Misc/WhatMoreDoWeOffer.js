import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function WhatMoreDoWeOffer({ColorFont}) {
    return (
        <>
            <Container style={{color:ColorFont}}>
                <Row style={{ marginTop: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h3>What more do we offer</h3>
                    <p>Complete A-Z Interview Preparations as well as your Training for Job Ready is on Us.<br /> We are here to help you till you get Placed for your Dream Job.</p>
                </Row>
                <Row className="justify-content-center">
                    {/* Extra small devices (phones) */}
                    <Col xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                        <div className="box text-center grow-on-hover">
                            <i className="bi bi-file-earmark-person" style={{ fontSize: 48, color: 'red', marginBottom: 4 }} />
                            <h5>Powerful Resume Building</h5>
                        </div>
                    </Col>

                    {/* Small devices (tablets) */}
                    <Col xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                        <div className="box text-center grow-on-hover">
                            <i className="bi bi-camera-video" style={{ fontSize: 48, color: 'red', marginBottom: 4 }} />
                            <h5>Scheduling Interviews</h5>
                        </div>
                    </Col>

                    {/* Medium devices (desktops) */}
                    <Col xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                        <div className="box text-center grow-on-hover">
                            <i className="bi bi-rocket-takeoff" style={{ fontSize: 48, color: 'red', marginBottom: 4 }} />
                            <h5>Complete Job Guidance</h5>
                        </div>
                    </Col>
                    {/* Extra small devices (phones) */}
                    <Col xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                        <div className="box text-center grow-on-hover">
                            <i className="bi bi-headset" style={{ fontSize: 48, color: 'red', marginBottom: 4 }} />
                            <h5>24*7 Extensive Support</h5>
                        </div>
                    </Col>

                    {/* Small devices (tablets) */}
                    <Col xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                        <div className="box text-center grow-on-hover">
                            <i className="bi bi-layers" style={{ fontSize: 48, color: 'red', marginBottom: 4 }} />
                            <h5>Assessment & Versant Test Preparation
                            </h5>
                        </div>
                    </Col>

                    {/* Medium devices (desktops) */}
                    <Col xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                        <div className="box text-center grow-on-hover">
                            <i className="bi bi-puzzle-fill" style={{ fontSize: 48, color: 'red', marginBottom: 4 }} />
                            <h5>Interview Tips & Tricks PDF</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
