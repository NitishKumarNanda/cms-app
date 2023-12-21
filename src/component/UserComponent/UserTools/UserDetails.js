import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UserContext from '../UserContext'
import URLContext from '../../URLContext'
import ShowUserDetailsOnly from './ShowUserDetailsOnly'
import ImageUpload from './ImageUpload'
import ResumeUpload from './ResumeUpload'

export default function UserDetails({enableEditing, isSaved}) {
    const { url } = useContext(URLContext);
    const { user } = useContext(UserContext);
    const [error, setError] = useState('');
    const fields = [
        { field: 'first_name', name: 'First Name', type: 'text' },
        { field: 'last_name', name: 'Last Name', type: 'text' },
        { field: 'date_of_birth', name: 'Date of Birth', type: 'date' },
        { field: 'gender', name: 'Gender', type: 'dropdown' },
        { field: 'street_address', name: 'Street Address', type: 'text' },
        { field: 'city', name: 'City', type: 'text' },
        { field: 'state_province', name: 'State Province', type: 'text' },
        { field: 'postal_code', name: 'Postal Code', type: 'text' },
        { field: 'country', name: 'Country', type: 'text' },
        { field: 'phone_number', name: 'Phone Number', type: 'tel' },
        { field: 'whatsApp', name: 'Whats App Number', type: 'tel' }
    ]
    const [isEditing, setEditing] = useState(enableEditing || false)
    const [userDetails, setUserDetails] = useState({
        email: user.email,
        first_name: '', last_name: '',
        date_of_birth: '', gender: '', profile_picture_url: '',
        street_address: '', city: '', state_province: '',
        postal_code: '', country: '', phone_number: '', whatsApp: '', resume_url: ''
    })
    const updateSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url + 'profileData/', { token: user.token, type: user.type, ...userDetails })

        if (response.data.status === 200) {
            setEditing(false);
            if(isSaved!==null && isSaved!==undefined) isSaved(false);
        } else {
            setError(response.data.error);
        }
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = name === 'profile_picture_url' ? e.target.files[0].name : e.target.value;
        setUserDetails({ ...userDetails, [name]: value })
    }
    const handleImageName = (e) => {
        setUserDetails({ ...userDetails, profile_picture_url: e.filename });
    }
    const handleDocumentName = (e) => {
        setUserDetails({ ...userDetails, resume_url: e.filename });
        console.log(e.filename);
    }
    const renderField = (field) => {
        switch (field.type) {
            case 'text':
            case 'date':
            case 'tel':
                return (
                    <input
                        className='form-control'
                        type={field.type}
                        name={field.field}
                        placeholder={field.name}
                        value={userDetails[field.field] || ''}
                        style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                );
            case 'dropdown':
                return (
                    <select className='form-control'
                        name={field.field}
                        value={userDetails[field.field] || ''}
                        onChange={handleChange}
                        style={{ boxShadow: '2px 2px 1px 1px rgba(0,0,255,0.7)' }}
                        disabled={!isEditing}
                    >
                        <option value="">Select {field.name}</option>
                        <option value="male" style={{ padding: 10 }}>Male</option>
                        <option value="female" style={{ padding: 10 }}>Female</option>
                        <option value="other" style={{ padding: 10 }}>Other</option>
                    </select>
                );
            default:
                return null;
        }
    };
    useEffect(() => {
        if (user) {
            const getInfo = async () => {
                const queryParams = `?email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}&type=${encodeURIComponent(user.type)}`;
                try {
                    const response = await axios.get(url + 'profileData/' + queryParams);
                    if (response.data.status === 200) {
                        setUserDetails(response.data.data);
                    }
                } catch (error) {
                    console.error("Error fetching user type:", error);
                }
            }
            getInfo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, user])
    return (
        <Container>
            {
                error &&
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: 10, textAlign: 'center' }}>
                    {error}
                </div>
            }
            {
                isEditing &&
                <>
                    <ImageUpload url={url} handleImageName={handleImageName} /> 
                    <br/>
                    <ResumeUpload url={url} handleDocumentName={handleDocumentName} />
                    <form onSubmit={updateSubmit}>
                        <Row style={{ marginTop: 20 }}>
                            {
                                fields.map((field, idx) => (
                                    <Col xs={12} sm={12} md={6} lg={5} xl={5} key={idx}>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor={field.field}>{field.name}</label>
                                            {renderField(field)}
                                        </div>
                                    </Col>

                                ))
                            }
                        </Row>

                        <div style={{ padding: 10 }}>
                            <Button variant='info' type="submit" style={{ marginRight: 20 }}>Save</Button>
                            <Button variant='info' onClick={() => { setEditing(false) }}>Cancel</Button>
                        </div>

                    </form>
                </>
            }
            {
                !isEditing &&
                <>
                    <ShowUserDetailsOnly userDetails={userDetails} fields={fields} url={url} />
                    <div style={{ padding: 10 }}>
                        <Button variant='info' onClick={() => { setEditing(true) }}>Update Details</Button>
                    </div>
                </>

            }
        </Container>
    )
}
