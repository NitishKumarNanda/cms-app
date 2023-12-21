import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgOne from '../Images/RR.png';
import imgTwo from '../Images/SS.png';

export default function GiftBanner() {
    return (
        <Container>
            <div style={{ background: 'linear-gradient(45deg, #ffcc00, #ff3300, #ffcc94)', padding: 30, marginTop: 30, boxShadow: '1px 2px grey' }}>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center', textShadow: '2px 2px red', maxHeight: 150 }}>
                        <h3>TOP 3 BATCH <br />TOPPERS <br />WILL GET</h3>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxHeight: 150, }}>
                        <img src={imgTwo} alt='image1' style={{ maxHeight: 100 }} />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxHeight: 150, }}>
                        <img src={imgOne} alt='image1' style={{ maxHeight: 100 }} />
                    </Col>

                </Row>
            </div>
        </Container>
    )
}
