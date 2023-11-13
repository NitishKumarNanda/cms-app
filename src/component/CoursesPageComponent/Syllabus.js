import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import syllabusData from './SyllabusData.json';
import ListItem from './ListItem';

export default function Syllabus() {
    const Syllabus = syllabusData;
    const [isExpanded, setExpanded] = useState([true, false, false, false]);

    const handleExpand = (idx) => {
        const temp = {...isExpanded};
        temp[idx] = !temp[idx];
        if (isExpanded[idx]) temp[idx] = false;
        setExpanded(temp);
    };

    return (
        <div style={{ backgroundColor: 'lightgrey', padding: 20, marginTop: 50, color:'black' }}>
            <Container>
                <Row style={{ fontSize: 48, marginLeft:'5%'}}>
                    <p className='gradient-text' style={{ padding: 10, fontSize:48, fontWeight:700}}>Syllabus</p>
                </Row>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={12} sm={12} md={10} lg={10}>
                        {Syllabus.map((ele, idx) => (
                            <div key={idx} style={{ marginBottom: 10 }}>
                                <Card onClick={() => handleExpand(idx)} 
                                    style={{ display: 'flex', 
                                        flexDirection: 'row', 
                                        alignItems: 'center', 
                                        justifyContent: 'space-between', 
                                        padding: '10px 20px 5px 10px',
                                        cursor:'pointer'
                                    }}>
                                    <h4 style={{ padding: 3 }}>{ele.part}</h4>
                                    {/* <i
                                        className={`bi ${isExpanded[idx] ? 'bi-chevron-up' : 'bi-chevron-down'}`}
                                        style={{marginRight:20}}
                                    /> */}
                                </Card>
                                <Container>
                                    <div style={{ marginLeft: '5%', padding: 10 }}>
                                        <Card style={{padding:20}}>
                                            <h4>{ele.feature[0]}</h4>
                                            <p style={{ marginLeft: '5%' }}>{ele.feature[1]}</p>
                                            {ele.data.map((items, id) => (
                                                <div key={id}>
                                                    <ListItem data={{items}}/>
                                                </div>
                                            ))}
                                        </Card>
                                    </div>
                                </Container>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}