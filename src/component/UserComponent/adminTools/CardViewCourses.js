import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import URLContext from '../../URLContext'

export default function CardViewCourses({ data }) {
    const { url } = useContext(URLContext);
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <div style={{ padding: 5 }}>
                    <img src={url + "uploads/" + data.courses_image} alt='courses' width='250px' height='150px' style={{ border: '1px solid black', borderRadius: 5 }} />
                </div>
                <Card style={{ cursor: 'pointer' }}>
                    <Card.Header>
                        <h6>{data.courses_name || "Course Name"}</h6>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            {
                                data.courses_special_fee === data.courses_fee
                                    ?
                                    <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <p><i className="bi bi-calendar-event" /> {data.next_batch}</p>
                                        <h6 style={{ color: 'green' }}>₹ {data.courses_fee || "0.00"} /-</h6>
                                    </div>
                                    :
                                    <>

                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
                                            <h6>
                                                <span><i className="bi bi-calendar-event" /> {data.next_batch}</span>
                                                <span style={{ color: 'green', marginLeft: 10 }}><del style={{ color: 'red' }}> ₹ {data.courses_fee || "0.00"} /-</del>
                                                 ₹ {data.courses_special_fee || "0.00"} /-</span>
                                            </h6>
                                        </div>
                                    </>
                            }
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
