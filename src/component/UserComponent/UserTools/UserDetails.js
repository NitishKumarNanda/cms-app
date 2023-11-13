import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UserContext from '../UserContext'
import URLContext from '../../URLContext'

export default function UserDetails() {
    const { url } = useContext(URLContext);
    const { user } = useContext(UserContext);
    const fields = [

        { field: 'first_name', name: 'First Name', type: 'text' },
        { field: 'last_name', name: 'Last Name', type: 'text' },
        { field: 'email', name: 'Email', type: 'email' },
        { field: 'date_of_birth', name: 'Date of Birth', type: 'date' },
        { field: 'gender', name: 'Gender', type: 'dropdown' },
        { field: 'profile_picture_url', name: 'Profile Picture Url', type: 'file' },
        { field: 'street_address', name: 'Street Address', type: 'text' },
        { field: 'city', name: 'City', type: 'text' },
        { field: 'state_province', name: 'State Province', type: 'text' },
        { field: 'postal_code', name: 'Postal Code', type: 'text' },
        { field: 'country', name: 'Country', type: 'text' },
        { field: 'phone_number', name: 'Phone Number', type: 'tel' }
    ]
    const [isEditing, setEditing] = useState(false)
    const [userDetails, setUserDetails] = useState({
        email:user.email, first_name: '', last_name: '',
        date_of_birth: '', gender: '', profile_picture_url: '',
        street_address: '', city: '', state_province: '',
        postal_code: '', country: '', phone_number: ''
    })
    const updateSubmit = async (e) => {
        e.preventDefault();
        const response=await axios.post(url, {action:'updateDetails',...userDetails})
        console.log(response.data.message + response.data);
        setEditing(false);
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = name === 'profile_picture_url' ? e.target.files[0].name : e.target.value;
        setUserDetails({ ...userDetails, [name]: value })
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
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                );
            case 'email':
                return (
                    <input
                        className='form-control'
                        type={field.type}
                        name={field.field}
                        placeholder={field.name}
                        value={user.email || ''}
                        onChange={handleChange}
                        disabled
                    />
                )

            case 'file':
                return (
                    <input
                        className='form-control'
                        type={field.type}
                        name={field.field}
                        placeholder={field.name}
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
                const queryParams = `?action=${encodeURIComponent('getUserDetails')}&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}`;

                try {
                    const response = await axios.get(url+queryParams);
                    console.log(response.data);
                    if(response.data.status===1){
                        setUserDetails(response.data.data[0]);
                    }
                } catch (error) {
                    console.error("Error fetching user type:", error);
                }

            }
            getInfo();
        }
    }, [])
    return (
        <Container>
            <form onSubmit={updateSubmit}>
                <Row>
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
                {
                    isEditing &&
                    <div style={{ padding: 10 }}>
                        <Button variant='info' type="submit" style={{ marginRight: 20 }}>Save</Button>
                        <Button variant='info' onClick={() => { setEditing(false) }}>Cancel</Button>
                    </div>
                }
            </form>
            {
                !isEditing &&
                <div style={{ padding: 10 }}>
                    <Button variant='info' onClick={() => { setEditing(true) }}>Update Details</Button>
                </div>
            }
        </Container>
    )
}
