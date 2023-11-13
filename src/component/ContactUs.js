import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ImagesBannerOnly from './Misc/ImagesBannerOnly';
import MyMap from './Misc/MyMap';
import GetDemo from './Misc/GetDemo';

export default function ContactUs() {
  return (
    <>
      <ImagesBannerOnly />
      <hr style={{ color: 'red', border: '3px solid red' }} />
      <h3 className='gradient-text glowing-text' style={{ textAlign: 'center' }}>Contact Us</h3>
      <hr style={{ color: 'red', border: '3px solid red' }} />
      <GetDemo/>
      <MyMap />
      <Container style={{ padding: 40 }}>
        <Row className="justify-content-center">
          {/* Extra small devices (phones) */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="box text-center">
              <h3>Email Us</h3>
              <i className="bi bi-envelope-at" style={{ fontSize: 18 }}>   Mehtavoice12@gmail.com </i>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="box text-center">
              <h3>Drop In</h3>
              <i className="bi bi-geo-alt" style={{ fontSize: 18 }}>  Gurugram</i>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="box text-center">
              <h3> Call us</h3>
              <i className="bi bi-telephone-outbound" style={{ fontSize: 18 }}>  +91 8405905206</i>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
