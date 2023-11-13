import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from '../Images/DSC2394.JPG';

export default function BannerForPages({ BannerTitle }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
        }}>
            {/* <div className="background-video">
                <video autoPlay muted loop id="background-video">
                    <source src="https://www.placementsbymehta.com/demo/Images/Butterfly.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
            <Container>
                <div className='gradient-text glowing-text' style={{ justifyContent: 'center' }}>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <img src={image} alt='banner' style={{ maxHeight: 300, borderRadius: 50 }} />
                        </Col>
                        <Col xs={12} sm={6} md={8} lg={8}>
                            <div style={{ marginTop:100 }}>
                                <p className='gradient-text glowing-text' style={{ fontSize: 120 }}>{BannerTitle}</p>
                            </div>
                        </Col>
                        <hr style={{ borderWidth: 5, color: 'red' }} />
                    </Row>
                </div>
            </Container>
        </div>
    )
}
