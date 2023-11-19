import React, { useContext, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import backgroundImage from '../Images/DSC2384.JPG'
import axios from 'axios';
import URLContext from '../URLContext';


export default function GetDemo() {
    const { url } = useContext(URLContext);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        whatsapp: '',
        experience: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const reset=()=>{
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            whatsapp: '',
            experience: '',
            message: ''
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        let Error = "";
        if (formData.name === "") {
            Error += "Name";
        } else if (formData.email === "") {
            Error += "Email";
        } else if (formData.phone === "") {
            Error += "Phone";
        } else if (formData.subject === "") {
            Error += "Subject";
        } else if (formData.whatsapp === "") {
            Error += "Whats App Number";
        } else if (formData.experience === "") {
            Error += "Experience";
        } else if (formData.message === "") {
            Error += "Message";
        }
        if (Error!=="") {
            setErrorMsg("Please, Enter your " + Error)
            console.log("Please, Enter your " + Error);
        } else {
            try {
                const response = await axios.post(url+'contactUS/', { ...formData });
                if (response.data.status === 200) {
                    alert("Submitted");
                } else {
                    setErrorMsg(response.data.message);
                }
            } catch (error) {
                setErrorMsg("An error occurred while submitting the form.");
            }
        }
    };
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',// Red filter
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container>
                <Card style={{ border: '2px solid red', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', textShadow: '2px 2px red' }}>
                    <Form onSubmit={handleSubmit} style={{ padding: 15 }}>
                        <Container>
                            <Row>
                                <Col md={6} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>Name *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>Phone Number *</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>Subject *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>WhatsApp Number *</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="What's App Number"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>Years of Experience *</Form.Label>
                                        <Form.Control as="select" name="experience" onChange={handleChange} required>
                                            <option value="">Select your Experience</option>
                                            <option value="fresher">Fresher</option>
                                            <option value="0-2">0-2</option>
                                            <option value="2-4">2-4</option>
                                            <option value="4 And Above">4 And Above</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{ padding: 8 }}>
                                    <Form.Group>
                                        <Form.Label>Message *</Form.Label>
                                        <Form.Control
                                            type="textfield"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Enter your message here"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div style={{display:'flex', justifyContent:'center', padding:10}}>
                            <button className='text-over-image-button' style={{ padding: '10px 60px', marginTop: 10 }} type='submit'>
                                Submit
                            </button> 
                            <button className='text-over-image-button' style={{ padding: '10px 60px', marginTop: 10, marginLeft:30 }} onClick={()=>{reset()}}>
                                Reset
                            </button> 
                            </div>
                            {
                                errorMsg &&
                                <div style={{
                                    backgroundColor: 'rgba(255,0,0,0.5)',
                                    borderRadius: 20,
                                    padding: 10,
                                    textAlign: 'center',
                                    margin: '20px 0px 10px 0px'
                                }}>{errorMsg}</div>
                            }
                        </Container>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}
