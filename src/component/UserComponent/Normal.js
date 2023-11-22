import React, { useState } from 'react'
import {Tab, Tabs } from 'react-bootstrap'
import UserDetails from './UserTools/UserDetails';
import Courses from './UserTools/Courses';
import Transaction from './UserTools/Transaction';

export default function Normal() {
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
                    <Courses/>
                </div>
            </Tab>
            <Tab eventKey="details" title="User Info">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <UserDetails/>
                </div>
            </Tab>

            <Tab eventKey="transactions" title="Transaction History">
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    <Transaction/>
                </div>
            </Tab>
        </Tabs>
    );
}
