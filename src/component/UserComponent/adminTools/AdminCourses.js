import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import CardViewCourses from './CardViewCourses'
import axios from 'axios'
import UserContext from '../UserContext'
import URLContext from '../../URLContext'
import ImageUpload from '../UserTools/ImageUpload'


export default function AdminCourses() {
    const { user } = useContext(UserContext);
    const { url } = useContext(URLContext);


    const [coursesList, setCoursesList] = useState([])
    const [msg, setMsg] = useState("No Data Found");
    const [modifyCourses, setModifyCourses] = useState({ id: 0, courses_name: '', courses_fee: 0, courses_special_fee: 0, next_batch: '', courses_image: '' });

    const [serverResponse, setServerResponse] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (modifyCourses.courses_name === "" || modifyCourses.courses_fee === "" || modifyCourses.courses_special_fee === "") {
                setServerResponse({ status: 500, data: true, msg: '!! Fill all fields to complete the action !!' });
                return;
            }
            const response = await axios.post(url + 'courses/update/', { ...modifyCourses, id: modifyCourses.id, email: user.email, token: user.token, type: user.type });
            clearButton();
            setServerResponse(response.data);
            getCourses();
        } catch (error) {
            setServerResponse({ status: 500, data: true, msg: '!! Failed to complete action !!' });
        }
    };
    const handleChange = (e) => {
        setModifyCourses({ ...modifyCourses, [e.target.name]: e.target.value });
    };

    const handleImageName = (e) => {
        setModifyCourses({ ...modifyCourses, courses_image: e.filename });
    }

    const clearButton = () => {
        setModifyCourses({ id: 0, courses_name: '', courses_fee: 0, courses_special_fee: 0 });
        setServerResponse("");
    }

    const getCourses = async () => {
        try {
            // const query = `courses/approved/?&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}&type=${encodeURIComponent(user.type)}`;
            const query = `courses/approved`
            const response = await axios.get(url + query);
            if (response.data.status === 200) {
                setCoursesList([...response.data.data]);
            } else {
                setMsg(response.data.error);
            }
        } catch (error) {
            console.error('Error fetching meeting data:', error);
        }
    }
    useEffect(() => {
        getCourses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Container>
                <Row>

                    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                        <h3>Courses List</h3>
                        {
                            coursesList.length > 0 ?
                                coursesList.map((item, idx) => (
                                    <div style={{ padding: 10 }} key={idx} onClick={() => {
                                        setModifyCourses(item);
                                    }}>
                                        <CardViewCourses data={item} />
                                    </div>
                                ))
                                :
                                <h5 style={{ textAlign: 'center', padding: 10 }}>{msg}</h5>
                        }

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Card>
                            <Card.Header><h4>Modify Courses</h4></Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="courses_name" style={{ padding: 10 }}>
                                        <Form.Label>Course Name</Form.Label>
                                        <Form.Control type="text" name="courses_name" value={modifyCourses.courses_name || ""} onChange={handleChange} placeholder="Enter Course Name" required />
                                    </Form.Group>
                                    <Form.Group controlId="courses_fee" style={{ padding: 10 }}>
                                        <Form.Label>Course Fee</Form.Label>
                                        <Form.Control type="num" name="courses_fee" value={modifyCourses.courses_fee || ""} onChange={handleChange} placeholder="Enter Course Fee" required />
                                    </Form.Group>
                                    <Form.Group controlId="courses_special_fee" style={{ padding: 10 }}>
                                        <Form.Label>Special Fee</Form.Label>
                                        <Form.Control type="num" name="courses_special_fee" value={modifyCourses.courses_special_fee || ""} onChange={handleChange} placeholder="Enter Special Fee" required />
                                    </Form.Group>
                                    <Form.Group controlId="next_batch" style={{ padding: 10 }}>
                                        <Form.Label>Next Batch Date</Form.Label>
                                        <Form.Control type="date" name="next_batch" value={modifyCourses.next_batch || ""} onChange={handleChange} placeholder="Enter Special Fee" required />
                                    </Form.Group>
                                    <div style={{ padding: 10 }}>
                                        <ImageUpload url={url} handleImageName={handleImageName} title={"Course Image (700 x 467)"}/>
                                    </div>
                                    <div>
                                        <Button variant="primary" type="submit">
                                            Update
                                        </Button>
                                        {
                                            (modifyCourses.courses_fee || modifyCourses.courses_name || modifyCourses.courses_special_fee) ?
                                                <Button variant="primary" style={{ marginLeft: 20 }} onClick={clearButton}>
                                                    Clear
                                                </Button>
                                                : ""
                                        }
                                    </div>
                                    {
                                        serverResponse &&
                                            serverResponse.status === 200 ?
                                            <p style={{ color: 'green', marginTop: 10 }}>{serverResponse.msg}</p>
                                            :
                                            <p style={{ color: 'red', marginTop: 10 }}>{serverResponse.msg}</p>
                                    }
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
