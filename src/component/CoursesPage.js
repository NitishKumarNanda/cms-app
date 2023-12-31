import React from 'react';
import WhatMoreDoWeOffer from './Misc/WhatMoreDoWeOffer';
import Syllabus from './CoursesPageComponent/Syllabus';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LeftImageData from './Misc/LeftImageData';
import ImageLeft from './Images/DSC2208.JPG';

import gift1 from './Images/smartwatch.jpg';
import gift2 from './Images/headphones.jpg';
import gift3 from './Images/RR.png'
import ImagesBannerOnly from './Misc/ImagesBannerOnly';
import { useParams } from 'react-router-dom';
import GiftBanner from './CoursesPageComponent/GiftBanner';

export default function CoursesPage() {
    const { courseId } = useParams();
    const data = [{ icon: 'bi bi-person-vcard', step: 'Step 1', data: '15 Days Powerful Job Ready Training' },
    { icon: 'bi bi-camera-reels', step: 'Step 2', data: 'Aptitude & Communication test online' },
    { icon: 'bi bi-person-rolodex', step: 'Step 3', data: 'Get Guaranteed Interview Opportunity With a Company' },
    { icon: 'bi bi-person-check', step: 'Step 4', data: 'Crack interviews And Get Placements In Top Companies' }]
    return (
        <div style={{ backgroundColor: 'lightgrey', overflowY: 'auto', height: 'calc(100vh - 135px)' }}>
            <ImagesBannerOnly />
            <GiftBanner />
            <Container style={{ marginTop: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                <Row style={{ maxWidth: '100%' }}>
                    {
                        data.map((ele, idx) => (

                            <Col xs={12} sm={6} md={6} lg={3} key={idx} >
                                <div className="grow-on-hover" style={{ border: '2px solid red', padding: '3%', width: 200, height: 200 }}>
                                    <i className={`${ele.icon}`} style={{ color: 'red', fontSize: 48 }} />
                                    <h5>{ele.step}</h5>
                                    <p>{ele.data}</p>
                                </div><br />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <hr />
            <Container>
                <Row style={{ fontSize: 48 }}>
                    <p className='gradient-text' style={{ padding: 10, fontSize: 48, fontWeight: 700 }}>Syllabus</p>
                </Row>
            </Container>
            <Syllabus courseId={courseId} />
            
            <Container>
                <Card >
                    <Card.Header>EVERY BATCH 3 TOPPERS WILL RECEIVE REWARDS</Card.Header>
                    <Row>
                        <Col xs={12} sm={12} md={3} lg={3} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                <Card style={{width:'100%'}}>
                                    <Card.Header>1st Rank</Card.Header>
                                    <Card.Body>Smart Phone<img src={gift1} alt='gift1' style={{ borderRadius: '50%', height: 50, width: 50 }} /></Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                <Card  style={{width:'100%'}}>
                                    <Card.Header>2nd Rank</Card.Header>
                                    <Card.Body>Wireless Earphone <img src={gift2} alt='gift1' style={{ borderRadius: '50%', height: 50, width: 50 }} /></Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                <Card style={{width:'100%'}}>
                                    <Card.Header>3rd Rank</Card.Header>
                                    <Card.Body>Crockery Set <img src={gift3} alt='gift1' style={{ borderRadius: '50%', height: 50, width: 50 }} /></Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                <Card style={{width:'100%'}}>
                                    <Card.Header>And many more</Card.Header>
                                    <Card.Body>Cash rewards <img src={gift3} alt='gift1' style={{ borderRadius: '50%', height: 50, width: 50 }} /></Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container><br/>
            <hr />
            <WhatMoreDoWeOffer />
            <LeftImageData data={{
                title: 'We are working at almost twice the capacity',
                details: [`We're pulling out all the stops to make your job aspirations a reality. At our peak performance, we're operating at nearly double our regular capacity. Why?`,
                    `Because
                    we understand the importance of your dream job and we're committed to do
                    everything it takes to get you there. Our team is working tirelessly to create
                    opportunities, offer guidance and provide the support you need to succeed. Your job
                    journey is our top priority and we're here to make it happen, no matter what it takes.
                    So, rest assured, with us, you're in capable hands and your dream job is well within
                    reach.`],
                imgSrc: ImageLeft
            }} />

        </div>
    );
}
