import React from 'react'
import { Card, Row } from 'react-bootstrap'

export default function CardViewCourses({ data }) {
    return (
        <>
            <Card style={{ cursor: 'pointer' }}>
                <Card.Header>
                    <h4>{data.courses_name || "Course Name"}</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        {
                            data.courses_special_fee === data.courses_fee
                                ?
                                <div>
                                    <h5 style={{color:'green'}}>Course Fee : ₹ {data.courses_fee || "0.00"} /-</h5>
                                </div>
                                :
                                <>
                                    <div style={{display:'flex'}}>
                                        <h5>Special Fee : <del style={{color:'red'}}> ₹ {data.courses_fee || "0.00"} /-  </del></h5>
                                        <h5 style={{color:'green', marginLeft:10}}> ₹ {data.courses_special_fee || "0.00"} /-</h5>
                                    </div>
                                </>
                        }
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
