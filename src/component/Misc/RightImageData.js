import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function RightImageData({ data }) {
    return (
        <div style={{ backgroundImage: 'linear-gradient(45deg, red,pink)', color: 'white', width: '100%' }}>
            <Container style={{ marginTop: 20 }}>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={6} lg={6} style={{ padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="box text-center">
                            <h2>{data.title}</h2>
                            {data.details.map((item, idx) => (
                                <p key={idx}>{item}</p>
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} style={{ padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="box text-center" >
                            <img src={data.imgSrc} alt='img' style={{ maxHeight: 500, width: '100%', borderRadius:'10px'}} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
