import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import UserTable from './adminTools/UserTable';

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
                Tab content for Home
            </Tab>
            <Tab eventKey="users" title="Users">
                <UserTable/>
            </Tab>
            <Tab eventKey="courses" title="Courses">
                Tab content for Profile
            </Tab>
            <Tab eventKey="request" title="User Request">
                Tab content for Contact
            </Tab>
            <Tab eventKey="transactions" title="Transaction History">
                Tab content for Contact
            </Tab>
        </Tabs>
    )
}
