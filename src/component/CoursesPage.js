import React from 'react';
import WhatMoreDoWeOffer from './Misc/WhatMoreDoWeOffer';
import Syllabus from './CoursesPageComponent/Syllabus';
import { Col, Container, Row } from 'react-bootstrap';
import LeftImageData from './Misc/LeftImageData';
import ImageLeft from './Images/DSC2208.JPG'


import ImagesBannerOnly from './Misc/ImagesBannerOnly';

export default function CoursesPage() {
    const data = [{ icon: 'bi bi-person-vcard', step: 'Step 1', data: '15 Days Powerful Job Ready Training' },
    { icon: 'bi bi-camera-reels', step: 'Step 2', data: 'Aptitude & Communication test online' },
    { icon: 'bi bi-person-rolodex', step: 'Step 3', data: 'Get Guaranteed Interview Opportunity With a Company' },
    { icon: 'bi bi-person-check', step: 'Step 4', data: 'Crack interviews And Get Placements In Top Companies' }]
    return (
        <>
            {/* <BannerForPages BannerTitle='Courses' /> */}
            <ImagesBannerOnly/>
            <Container style={{ marginTop: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Row style={{ maxWidth: '80%' }}>
                    {
                        data.map((ele, idx) => (
                            <Col xs={12} sm={6} md={3} lg={3} key={idx} >
                                <div className="grow-on-hover" style={{ border: '2px solid red', padding: '3%' }}>
                                    <i className={`${ele.icon}`} style={{ color: 'red', fontSize: 48 }} />
                                    <h5>{ele.step}</h5>
                                    <p>{ele.data}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Syllabus />
            <WhatMoreDoWeOffer />
            <LeftImageData data={{
                title: 'We are working at almost twice the capacity',
                details: [`We're pulling out all the stops to make your job aspirations a reality. At our peak performance, we're operating at nearly double our regular capacity. Why?`,
                    `Because
                    we understand the importance of your dream job, and we're committed to doing
                    everything it takes to get you there. Our team is working tirelessly to create
                    opportunities, offer guidance, and provide the support you need to succeed. Your job
                    journey is our top priority, and we're here to make it happen, no matter what it takes.
                    So, rest assured, with us, you're in capable hands, and your dream job is well within
                    reach.`],
                imgSrc: ImageLeft
            }} />

        </>
    );
}
