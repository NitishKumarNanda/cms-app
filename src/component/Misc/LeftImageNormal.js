import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function LeftImageNormal({ data }) {
    return (
        <>
            <div style={{backgroundColor: 'grey', color: 'white' }}>
                <Container style={{padding:10}}>
                    <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 10 }}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img className="img-fluid" src={data.imgSrc} alt='img' style={{ maxWidth: '80%', maxHeight: 400, borderRadius: 20 }} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} style={{ marginTop: 10 }}>
                            <h3>{data.title}</h3>
                            {data.details.map((item,idx)=>(
                                <p key={idx}>{item}</p>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
