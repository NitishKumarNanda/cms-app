import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import axios from 'axios';
import URLContext from '../../URLContext';
import { Table } from 'react-bootstrap';


export default function ListMeeting() {
    const [meetingData, setMeetingData] = useState([]);
    const { user } = useContext(UserContext);
    const { url } = useContext(URLContext);
    const fetchMeetingData = async () => {
        try {
            const query = `?action=${encodeURIComponent('getAllMeeting')}&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}`;
            const response = await axios.get(url + query);
            if (response.data.status === 1) {
                setMeetingData([...response.data.data]);
                console.log(response.data.data);
            } else console.log("Error");
        } catch (error) {
            console.error('Error fetching meeting data:', error);
        }
    };

    useEffect(() => {
        fetchMeetingData();
    }, []);
    return (
        <>
            <div className=" mt-5" style={{ border: '1px solid grey', padding: 20, marginBottom: 20 }}>
                <h1>Meeting List</h1>
                <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {meetingData.length > 0 ?
                        <Table striped bordered hover>
                            <thead>
                                <tr style={{backgroundColor:'#ff6666'}}>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>

                                {meetingData.map((meeting, idx) => (
                                    <tr key={meeting.id}>
                                        <td>{idx + 1}</td>
                                        <td>{meeting.email}</td>
                                        <td>{meeting.time}</td>
                                        <td>{meeting.date}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                        :
                        <div style={{ padding: 20 }}>
                            <p>No Data Found</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}