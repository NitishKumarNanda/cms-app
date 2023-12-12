import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import UserTable from './adminTools/UserTable';
import UserContactUs from './adminTools/UserContactUs';
import AdminCourses from './adminTools/AdminCourses';
import Transaction from './adminTools/TransactionConfirmation';
import ListMeeting from './UserTools/ListMeeting';


export default function Admin() {
    const [key, setKey] = useState('courses');

    return (

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="courses" title="Courses">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <AdminCourses/>
                </div>
            </Tab>
            <Tab eventKey="users" title="Users">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <UserTable />
                </div>
            </Tab>
            <Tab eventKey="request" title="User Request">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <UserContactUs />
                </div>
            </Tab>
            <Tab eventKey="meeting" title="Meeting Request">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <ListMeeting/>
                </div>
            </Tab>
            <Tab eventKey="transactions" title="Transaction History">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <Transaction/>
                </div>
            </Tab>
        </Tabs>

    )
}
