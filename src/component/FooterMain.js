import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function FooterMain() {
    const footerStyle = {
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 5
    };
    return (
        <div style={footerStyle}>
            {/* <Container style={{ padding: '20px' }}>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="box text-center">
                            <h5>Mehta Placements</h5>
                            <i className="bi bi-facebook" style={{ padding: 10, cursor: 'pointer' }} />
                            <i className="bi bi-twitter" style={{ padding: 10, cursor: 'pointer' }} />
                            <i className="bi bi-instagram" style={{ padding: 10, cursor: 'pointer' }} />
                            <i className="bi bi-linkedin" style={{ padding: 10, cursor: 'pointer' }} />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="box text-center">
                            <p>Mehtavoice12@gmail.com</p>
                            <p>+91 8405905206</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="box text-center">
                            <p>Mehtavoice12@gmail.com</p>
                            <p>+91 8405905206</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                    <p>Copyright © 2023 PlacementByMehta.com</p>
                </Row>
            </Container> */}
            <Container>
                <Row >
                    {/* Extra small devices (phones) */}
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <Row>
                            <div className="box">
                                <h5>Mehta Placements</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="box">
                                <a href="https://www.facebook.com/profile.php?id=61554544122352" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook" style={{ padding: 10, cursor: 'pointer' }} />
                                </a>
                                {/* <a href="https://www.instagram.com/mehtaplacements/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter" style={{ padding: 10, cursor: 'pointer' }} />
                                </a> */}
                                <a href="https://www.instagram.com/mehtaplacements/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram" style={{ padding: 10, cursor: 'pointer' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/mehta-placements-6728b5247/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin" style={{ padding: 10, cursor: 'pointer' }} />
                                </a>
                            </div>
                        </Row>
                    </Col>

                    {/* Small devices (tablets) */}

                    <Col xs={12} sm={6} md={8} lg={8}>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <div className="box text-center">
                                    <p>Mehtavoice12@gmail.com</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <div className="box text-center">
                                    <p>+91 8405905206</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>

                                <div className="box text-center">
                                    <p>Copyright © 2023 PlacementsByMehta.com</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
