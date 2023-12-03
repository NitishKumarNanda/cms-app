import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function PaymentPage() {
    const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (agreed) {
            // Process payment data (mock action)
            console.log('Payment form submitted:', formData);
            // Reset form data
            setFormData({
                fullName: '',
                cardNumber: '',
                expiryDate: '',
                cvv: ''
            });
        } else {
            alert('Please agree to the terms and conditions.');
        }
    };
    return (
        <div style={{maxWidth:600}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions mentioned above."
                        checked={agreed}
                        onChange={handleAgreementChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicExpiryDate">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicCVV">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit Payment
                </Button>
            </Form>
        </div>
    )
}
