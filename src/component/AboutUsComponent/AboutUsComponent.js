import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function AboutUsComponent({ data }) {
    return (
        <Container style={{ marginTop: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
            <h2>{data.title}</h2>
            <h4>{data.subTitle}</h4>
            {data.details.map((x, y) => (
                <p key={y} style={{ width: '90%', fontSize: 18 }} className='grow-on-hover'>{x}</p>
            ))}
            <Row className="justify-content-center" style={{ alignItems: 'center', textAlign: 'center', marginTop: 20 }}>
                {
                    data.members.map((ele, idx) =>
                        <Col xs={12} sm={6} md={3} lg={3} style={{ padding: 20 }} key={idx}>
                            <div className="box text-center grow-on-hover" style={{ border: '2px solid red', borderRadius: 20 }}>
                                <img className="img-fluid" src={ele.imgSrc} alt='img' style={{ borderRadius: '50%', height: 200, width: 200 }} />
                                <p>{ele.name}</p>
                                <p style={{ height: 30 }}>{ele.designation}</p>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    {ele.socialMedia.map((a, b) => (
                                        <div key={b} style={{ padding: 5 }}>
                                            <a href={a.link}><i className={a.icon} style={{ fontSize: 28, color: 'black' }} /></a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
