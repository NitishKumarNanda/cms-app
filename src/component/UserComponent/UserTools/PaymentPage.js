import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import UserContext from '../UserContext';
import URLContext from '../../URLContext';
import axios from 'axios';


export default function PaymentPage({coursesName, courseFee}) {
    const { url } = useContext(URLContext);
    const { user } = useContext(UserContext);
    const [agreed, setAgreed] = useState(false);
    const [error,setError]=useState(false);
    const [formData, setFormData] = useState({
        email: user.email,
        token: user.token,
        type: user.type,
        transactionId: '',
        utr: '',
        name: '',
        upiId: '',
        amount: courseFee,
        coursesName: coursesName
    });

    const handleAgreementChange = () => {
        setAgreed(!agreed);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (agreed) {
            console.log('Payment form submitted:', formData);
            // Reset form data
            const response = await axios.post(url + 'transaction/courses/', formData)

            if (response.data.status === 200) {
                alert(response.data.msg)
                setError(false);
            } else {
                setError(true);
            }
            setFormData({
                transactionId: '',
                utr: '',
                name: '',
                upiId: '',
                coursesName: coursesName || '',
                amount: courseFee || 0
            });
        } else {
            alert('Please agree to the terms and conditions.');
        }
    };
    return (
        <div style={{ maxWidth: 600 }}>
            {
                error && <p style={{fontWeight:600, color:'red'}}>!!! Invalid Data or Duplicate entry !!!</p>
            }
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions mentioned above."
                        checked={agreed}
                        onChange={handleAgreementChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicFullName" style={{ padding: 10 }}>
                    <Form.Label>Transaction Id</Form.Label>
                    <Form.Control
                        type="text"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleInputChange}
                        style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicFullName" style={{ padding: 10 }}>
                    <Form.Label>UPI Transaction Id or UTR</Form.Label>
                    <Form.Control
                        type="text"
                        name="utr"
                        value={formData.utr}
                        onChange={handleInputChange}
                        style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCardNumber" style={{ padding: 10 }}>
                    <Form.Label>Account holder's Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicExpiryDate" style={{ padding: 10 }}>
                            <Form.Label>Your UPI Id</Form.Label>
                            <Form.Control
                                type="text"
                                name="upiId"
                                value={formData.upiId}
                                onChange={handleInputChange}
                                style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicCVV" style={{ padding: 10 }}>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="num"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" style={{ marginLeft: 10, marginTop: 10 }}>
                    Submit Payment Details
                </Button>
            </Form>
        </div>
    )
}
