import React from 'react'
import { Col, Row } from 'react-bootstrap'


export default function ShowUserDetailsOnly({ userDetails, fields, url}) {
    return (
        <>
            <div style={{ border: '1px solid black', borderRadius: 5, height: 150, maxWidth: '30%' }}>
                <img src={url+'uploads/'+userDetails.profile_picture_url} alt='Profile' />
            </div>
            <Row style={{ marginTop: 20 }}>
                {
                    fields.map((field, idx) => (
                        <Col xs={12} sm={12} md={6} lg={5} xl={5} key={idx}>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor={field.field}>{field.name}</label> <br />
                                <div style={{ border: '1px solid black', borderRadius: 10, padding: 5, width: '100%', height: 40 }}>
                                    <label className="form-label" htmlFor={field.field} style={{ marginLeft: 10 }}>{userDetails[field.field]}</label>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}
