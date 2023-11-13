import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function DataImageButton({ data, action, dataOther }) {
    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <Container style={{ padding: 10 }}>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', padding: 10, borderRadius: 20 }}>
                    <Col style={{ padding: 20 }} xs={12} sm={12} md={6} lg={6}>
                        <h3>{data.title}</h3>
                        {data.details.map((item, idx) => (
                            <p key={idx} style={{textAlign:'left'}}>{item}</p>
                        ))}
                        <button className='text-over-image-button' style={{ padding: '10px 60px' }} onClick={action && action.BookMeeting}>
                            {data.buttonName}
                        </button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <img className="img-fluid" src={data.imgSrc} alt='img' style={{ maxHeight: 300, width: 'auto', borderRadius: 5 }} />
                    </Col>
                </Row>
                <Row>
                    {dataOther && dataOther.details.map((item, idx) => (
                        <p key={idx} style={{textAlign:'left', justifyContent:'space-evenly'}}>{item}</p>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
