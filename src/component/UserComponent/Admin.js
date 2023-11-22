import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import UserTable from './adminTools/UserTable';
import UserContactUs from './adminTools/UserContactUs';

export default function Admin() {
    const [key, setKey] = useState('details');

    return (

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="details" title="Summary">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    Tab content for Home
                </div>
            </Tab>
            <Tab eventKey="users" title="Users">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <UserTable />
                </div>
            </Tab>
            <Tab eventKey="courses" title="Courses">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    Tab content for Profile
                </div>
            </Tab>
            <Tab eventKey="request" title="User Request">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <UserContactUs />
                </div>
            </Tab>
            <Tab eventKey="transactions" title="Transaction History">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    Tab content for Contact
                </div>
            </Tab>
        </Tabs>

    )
}
