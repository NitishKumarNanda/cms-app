import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import syllabusData from './SyllabusData.json';
import ListItem from './ListItem';

export default function Syllabus(props) {
    const { courseId } = props;
    const SyllabusDB = syllabusData;
    const [isExpanded, setExpanded] = useState(true);

    const handleExpand = () => {
        setExpanded(!isExpanded);
    };
    return (
        <div style={{ backgroundColor: 'lightgrey', padding: 20, marginTop: 50, color: 'black' }}>
            <Container>
                <Row style={{ fontSize: 48, marginLeft: '5%' }}>
                    <p className='gradient-text' style={{ padding: 10, fontSize: 48, fontWeight: 700 }}>Syllabus</p>
                </Row>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={12} sm={12} md={10} lg={10}>
                        <div style={{ marginBottom: 10 }}>
                            <Card onClick={() => handleExpand}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '10px 20px 5px 10px',
                                    cursor: 'pointer'
                                }}>
                                <h4 style={{ padding: 3 }}>{SyllabusDB[courseId - 1].part}</h4>
                                {/* <i
                                        className={`bi ${isExpanded[idx] ? 'bi-chevron-up' : 'bi-chevron-down'}`}
                                        style={{marginRight:20}}
                                    /> */}
                            </Card>
                            <Container>
                                <div style={{ marginLeft: '5%', padding: 10 }}>
                                    <Card style={{ padding: 20 }}>
                                        <h4>{SyllabusDB[courseId - 1].feature[0]}</h4>
                                        <p style={{ marginLeft: '5%' }}>{SyllabusDB[courseId - 1].feature[1]}</p>
                                        {SyllabusDB[courseId - 1].data.map((items, id) => (
                                            <div key={id}>
                                                <ListItem data={{ items }} />
                                            </div>
                                        ))}
                                    </Card>
                                </div>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
