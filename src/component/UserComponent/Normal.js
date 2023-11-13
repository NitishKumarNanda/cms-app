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
        >
            <Tab eventKey="courses" title="Courses">
                <Courses/>
            </Tab>
            <Tab eventKey="details" title="User Info">
                <UserDetails/>
            </Tab>

            <Tab eventKey="transactions" title="Transaction History">
                <Transaction/>
            </Tab>
        </Tabs>
    );
}
